package com.diepclone.app;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.widget.RemoteViews;

import org.json.JSONArray;
import org.json.JSONObject;

public class TankWidget extends AppWidgetProvider {

    static final String PREF_NAME        = "diep_widget";
    static final String KEY_TANKS_JSON   = "tanks_json";
    static final String KEY_IDX_PREFIX   = "idx_";
    static final String KEY_THEME        = "theme";
    static final String KEY_SHOW_DPS     = "show_dps";
    static final String KEY_SHOW_HP      = "show_hp";
    static final String KEY_SHOW_BARRELS = "show_barrels";
    static final String KEY_SHOW_SPEED   = "show_speed";
    static final String KEY_SHOW_DESC    = "show_desc";
    static final String KEY_ANIM_PULSE   = "anim_pulse";

    static final String ACTION_NEXT      = "com.diepclone.app.WIDGET_NEXT";
    static final String ACTION_PREV      = "com.diepclone.app.WIDGET_PREV";
    static final String ACTION_SETTINGS  = "com.diepclone.app.WIDGET_SETTINGS";
    static final String EXTRA_WIDGET_ID  = "widget_id";

    /* Tier colours matching JS TIER_PRESETS */
    static final int[] TIER_COLORS = {
        0xFF44AAFF, /* T1 */
        0xFFE0E0E0, /* T2 */
        0xFF22CC55, /* T3 */
        0xFFFFDD00, /* T4 */
        0xFFFF8800  /* T5 */
    };

    // ─── Lifecycle ───────────────────────────────────────────────────────────

    @Override
    public void onUpdate(Context ctx, AppWidgetManager mgr, int[] ids) {
        for (int id : ids) updateWidget(ctx, mgr, id);
    }

    @Override
    public void onReceive(Context ctx, Intent intent) {
        super.onReceive(ctx, intent);
        String action = intent.getAction();
        if (action == null) return;
        int widgetId = intent.getIntExtra(EXTRA_WIDGET_ID, -1);
        if (widgetId < 0) return;

        // SETTINGS handled first — works even when no tanks saved
        if (ACTION_SETTINGS.equals(action)) {
            Intent cfg = new Intent(ctx, WidgetConfigActivity.class);
            cfg.putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, widgetId);
            cfg.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            ctx.startActivity(cfg);
            return;
        }

        SharedPreferences prefs = ctx.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        String json = prefs.getString(KEY_TANKS_JSON, "[]");
        int count = 0;
        try { count = new JSONArray(json).length(); } catch (Exception ignored) {}

        if (count == 0) return;
        String idxKey = KEY_IDX_PREFIX + widgetId;
        int currentIdx = prefs.getInt(idxKey, 0);

        if (ACTION_NEXT.equals(action)) {
            currentIdx = (currentIdx + 1) % count;
        } else if (ACTION_PREV.equals(action)) {
            currentIdx = (currentIdx - 1 + count) % count;
        }

        prefs.edit().putInt(idxKey, currentIdx).apply();
        updateWidget(ctx, AppWidgetManager.getInstance(ctx), widgetId);
    }

    // ─── Core update ─────────────────────────────────────────────────────────

    static void updateWidget(Context ctx, AppWidgetManager mgr, int widgetId) {
        SharedPreferences prefs = ctx.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        String json   = prefs.getString(KEY_TANKS_JSON, "[]");
        boolean showDps     = prefs.getBoolean(KEY_SHOW_DPS,     true);
        boolean showHp      = prefs.getBoolean(KEY_SHOW_HP,      true);
        boolean showBarrels = prefs.getBoolean(KEY_SHOW_BARRELS, true);
        boolean showSpeed   = prefs.getBoolean(KEY_SHOW_SPEED,   true);
        boolean showDesc    = prefs.getBoolean(KEY_SHOW_DESC,    true);
        boolean animPulse   = prefs.getBoolean(KEY_ANIM_PULSE,  true);
        String  theme       = prefs.getString(KEY_THEME,         "dark");

        JSONArray tanks = new JSONArray();
        try { tanks = new JSONArray(json); } catch (Exception ignored) {}

        int count  = tanks.length();
        int currentIdx = prefs.getInt(KEY_IDX_PREFIX + widgetId, 0);
        if (count > 0 && currentIdx >= count) currentIdx = 0;

        JSONObject tank = null;
        if (count > 0) {
            try { tank = tanks.getJSONObject(currentIdx); } catch (Exception ignored) {}
        }

        RemoteViews views = new RemoteViews(ctx.getPackageName(), R.layout.widget_tank);

        if (tank == null) {
            views.setTextViewText(R.id.widget_tank_name,    "Нет танков");
            views.setTextViewText(R.id.widget_tier_badge,   "T?");
            views.setTextViewText(R.id.widget_tank_counter, "0 / 0");
            views.setTextViewText(R.id.widget_tank_dps,     "—");
            views.setTextViewText(R.id.widget_tank_hp,      "—");
            views.setTextViewText(R.id.widget_tank_barrels, "—");
            views.setTextViewText(R.id.widget_tank_speed,   "—");
            views.setTextViewText(R.id.widget_tank_desc,    "Создай танк в конструкторе");
            // Open app on tap
            views.setOnClickPendingIntent(R.id.widget_card, makeLaunchIntent(ctx, widgetId));
        } else {
            String name     = tank.optString("name", "Танк");
            int    tier     = tank.optInt("tier", 3);
            double dps      = tank.optDouble("dps", 0);
            int    hpPct    = tank.optInt("hpPct", 100);
            int    barrels  = tank.optInt("barrels", 0);
            double speed    = tank.optDouble("speed", 1.0);
            String desc     = tank.optString("description", "");
            String color    = tank.optString("color", "#4488ff");
            String special  = tank.optString("specialType", "normal");
            JSONArray barrelData = tank.optJSONArray("barrelData");

            int tierColor = tier >= 1 && tier <= 5 ? TIER_COLORS[tier - 1] : TIER_COLORS[2];

            views.setTextViewText(R.id.widget_tank_name, name);
            views.setTextViewText(R.id.widget_tier_badge, "T" + tier);
            views.setTextViewText(R.id.widget_tank_counter, (currentIdx + 1) + " / " + count);
            views.setTextViewText(R.id.widget_tank_desc, showDesc ? desc : "");
            views.setTextViewText(R.id.widget_tank_dps,     showDps     ? fmt1(dps) : "—");
            views.setTextViewText(R.id.widget_tank_hp,      showHp      ? hpPct + "%" : "—");
            views.setTextViewText(R.id.widget_tank_barrels, showBarrels ? String.valueOf(barrels) : "—");
            views.setTextViewText(R.id.widget_tank_speed,   showSpeed   ? fmt1(speed) + "×" : "—");

            // HP bar: max 240 (T5 base), progress = hpPct * 240 / 100
            views.setProgressBar(R.id.widget_hp_bar, 240, Math.min(240, hpPct * 240 / 100), false);

            // Draw tank bitmap frames
            boolean isSpinner = "drone".equals(special) || tank.optBoolean("autoGun", false);
            Bitmap bmpA = drawTankBitmap(color, barrelData, special, tierColor, tier, 0f, false, theme);
            // When animation is off, both frames are identical (no visible pulse)
            Bitmap bmpB = animPulse
                ? drawTankBitmap(color, barrelData, special, tierColor, tier, isSpinner ? 22f : 0f, true, theme)
                : bmpA;
            views.setImageViewBitmap(R.id.widget_tank_image_a, bmpA);
            views.setImageViewBitmap(R.id.widget_tank_image_b, bmpB);

            // Tier badge color
            views.setTextColor(R.id.widget_tier_badge, tierColor);

            // Navigation intents
            views.setOnClickPendingIntent(R.id.widget_prev_btn,
                makeBroadcast(ctx, ACTION_PREV, widgetId));
            views.setOnClickPendingIntent(R.id.widget_next_btn,
                makeBroadcast(ctx, ACTION_NEXT, widgetId));
            views.setOnClickPendingIntent(R.id.widget_settings_btn,
                makeBroadcast(ctx, ACTION_SETTINGS, widgetId));
            views.setOnClickPendingIntent(R.id.widget_tank_name,
                makeLaunchIntent(ctx, widgetId));
            views.setOnClickPendingIntent(R.id.widget_tank_flipper,
                makeLaunchIntent(ctx, widgetId));

            // Visibility toggles for stats
            views.setViewVisibility(R.id.widget_stat_dps_wrap,     showDps     ? android.view.View.VISIBLE : android.view.View.GONE);
            views.setViewVisibility(R.id.widget_stat_hp_wrap,      showHp      ? android.view.View.VISIBLE : android.view.View.GONE);
            views.setViewVisibility(R.id.widget_stat_barrels_wrap, showBarrels ? android.view.View.VISIBLE : android.view.View.GONE);
            views.setViewVisibility(R.id.widget_stat_speed_wrap,   showSpeed   ? android.view.View.VISIBLE : android.view.View.GONE);
        }

        mgr.updateAppWidget(widgetId, views);
    }

    // ─── Tank bitmap drawing ──────────────────────────────────────────────────

    static Bitmap drawTankBitmap(String hexColor, JSONArray barrels, String specialType,
                                  int tierArgb, int tier, float rotationDeg, boolean glow, String theme) {
        int size = 200;
        Bitmap bmp = Bitmap.createBitmap(size, size, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(bmp);

        int cx = size / 2;
        int cy = size / 2;
        int bodyR = size / 3;

        int tankColor;
        try { tankColor = Color.parseColor(hexColor.startsWith("#") ? hexColor : "#4488ff"); }
        catch (Exception e) { tankColor = 0xFF4488FF; }

        // Glow ring
        if (glow) {
            Paint glowPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
            glowPaint.setStyle(Paint.Style.STROKE);
            glowPaint.setStrokeWidth(10f);
            glowPaint.setColor(tankColor & 0x00FFFFFF | 0x44000000);
            canvas.drawCircle(cx, cy, bodyR + 8, glowPaint);
            glowPaint.setStrokeWidth(5f);
            glowPaint.setColor(tankColor & 0x00FFFFFF | 0x66000000);
            canvas.drawCircle(cx, cy, bodyR + 14, glowPaint);
        }

        // Barrel paint
        Paint barrelPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        barrelPaint.setStyle(Paint.Style.FILL);
        int barrelColor = blendColor(tankColor, 0xFF888888, 0.4f);
        barrelPaint.setColor(barrelColor);

        Paint barrelBorderPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        barrelBorderPaint.setStyle(Paint.Style.STROKE);
        barrelBorderPaint.setStrokeWidth(1.5f);
        barrelBorderPaint.setColor(0x66000000);

        // Draw barrels
        if (barrels != null && barrels.length() > 0) {
            for (int i = 0; i < barrels.length(); i++) {
                try {
                    JSONObject b = barrels.getJSONObject(i);
                    // JS stores angles in radians; canvas.rotate() needs degrees
                    double angleDeg = Math.toDegrees(b.optDouble("angle", 0)) + rotationDeg;
                    double len = b.optDouble("length", 48) / 72.0 * bodyR * 1.55;
                    double w   = b.optDouble("width",  14) / 22.0 * bodyR * 0.38;
                    canvas.save();
                    canvas.translate(cx, cy);
                    canvas.rotate((float) angleDeg);
                    RectF rect = new RectF(0, (float)(-w / 2), (float) len, (float)(w / 2));
                    canvas.drawRoundRect(rect, 4, 4, barrelPaint);
                    canvas.drawRoundRect(rect, 4, 4, barrelBorderPaint);
                    canvas.restore();
                } catch (Exception ignored) {}
            }
        } else {
            // Default: single barrel forward
            canvas.save();
            canvas.translate(cx, cy);
            canvas.rotate(rotationDeg);
            RectF rect = new RectF(0, -bodyR * 0.18f, bodyR * 1.5f, bodyR * 0.18f);
            canvas.drawRoundRect(rect, 4, 4, barrelPaint);
            canvas.restore();
        }

        // Drone satellites
        if ("drone".equals(specialType)) {
            Paint dronePaint = new Paint(Paint.ANTI_ALIAS_FLAG);
            dronePaint.setStyle(Paint.Style.FILL);
            for (int i = 0; i < 4; i++) {
                double da = Math.toRadians(90.0 * i + rotationDeg);
                float dx = cx + (float)(Math.cos(da) * (bodyR * 1.55));
                float dy = cy + (float)(Math.sin(da) * (bodyR * 1.55));
                dronePaint.setColor(tankColor);
                dronePaint.setAlpha(0xBB);
                canvas.drawCircle(dx, dy, bodyR * 0.22f, dronePaint);
            }
        }

        // Body
        Paint bodyFillPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        bodyFillPaint.setStyle(Paint.Style.FILL);
        bodyFillPaint.setColor(tankColor);
        canvas.drawCircle(cx, cy, bodyR, bodyFillPaint);

        // Body inner highlight
        Paint highlightPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        highlightPaint.setStyle(Paint.Style.FILL);
        highlightPaint.setColor(0x33FFFFFF);
        canvas.drawCircle(cx - bodyR * 0.2f, cy - bodyR * 0.2f, bodyR * 0.45f, highlightPaint);

        // Body border
        Paint borderPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        borderPaint.setStyle(Paint.Style.STROKE);
        borderPaint.setStrokeWidth(3f);
        borderPaint.setColor(tierArgb);
        borderPaint.setAlpha(glow ? 220 : 160);
        canvas.drawCircle(cx, cy, bodyR, borderPaint);

        // Tier number in center
        Paint textPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        textPaint.setColor(0xDDFFFFFF);
        textPaint.setTextSize(bodyR * 0.55f);
        textPaint.setFakeBoldText(true);
        textPaint.setTextAlign(Paint.Align.CENTER);
        canvas.drawText("T" + tier, cx, cy + textPaint.getTextSize() * 0.35f, textPaint);

        return bmp;
    }

    // ─── Helpers ─────────────────────────────────────────────────────────────

    private static int blendColor(int a, int b, float t) {
        int r = (int)(Color.red(a)   * (1 - t) + Color.red(b)   * t);
        int g = (int)(Color.green(a) * (1 - t) + Color.green(b) * t);
        int bl= (int)(Color.blue(a)  * (1 - t) + Color.blue(b)  * t);
        return Color.rgb(r, g, bl);
    }

    private static String fmt1(double v) {
        return String.valueOf(Math.round(v * 10) / 10.0);
    }

    private static PendingIntent makeLaunchIntent(Context ctx, int widgetId) {
        Intent launch = new Intent(ctx, MainActivity.class);
        launch.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        return PendingIntent.getActivity(ctx, widgetId,
                launch, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    private static PendingIntent makeBroadcast(Context ctx, String action, int widgetId) {
        Intent intent = new Intent(ctx, TankWidget.class);
        intent.setAction(action);
        intent.putExtra(EXTRA_WIDGET_ID, widgetId);
        // requestCode must be unique and non-negative per action+widget combination
        int requestCode = Math.abs(widgetId * 31 + action.hashCode() & 0x7FFFFFFF);
        return PendingIntent.getBroadcast(ctx, requestCode,
                intent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    // ─── Public API called from JS bridge ────────────────────────────────────

    /**
     * Saves the full JSON tank list and triggers widget refresh.
     * Called from JS via Android.updateWidgetAll(json)
     */
    public static void saveAllTanks(Context ctx, String tanksJson) {
        ctx.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE)
           .edit()
           .putString(KEY_TANKS_JSON, tanksJson)
           .apply();
        notifyAll(ctx);
    }

    public static void notifyAll(Context ctx) {
        AppWidgetManager mgr = AppWidgetManager.getInstance(ctx);
        ComponentName cn = new ComponentName(ctx, TankWidget.class);
        for (int id : mgr.getAppWidgetIds(cn)) {
            updateWidget(ctx, mgr, id);
        }
    }
}
