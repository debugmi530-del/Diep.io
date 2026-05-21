package com.diepclone.app;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.widget.RemoteViews;

import org.json.JSONArray;
import org.json.JSONObject;

public class TankWidget extends AppWidgetProvider {

    static final String PREF_NAME   = "diep_widget";
    static final String KEY_NAME    = "last_tank_name";
    static final String KEY_TIER    = "last_tank_tier";
    static final String KEY_DPS     = "last_tank_dps";
    static final String KEY_HP      = "last_tank_hp";
    static final String KEY_BARRELS = "last_tank_barrels";
    static final String KEY_COLOR   = "last_tank_color";

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        for (int id : appWidgetIds) {
            updateWidget(context, appWidgetManager, id);
        }
    }

    static void updateWidget(Context ctx, AppWidgetManager mgr, int widgetId) {
        SharedPreferences prefs = ctx.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);

        String name    = prefs.getString(KEY_NAME, "Нет танка");
        int    tier    = prefs.getInt(KEY_TIER, 0);
        String dps     = prefs.getString(KEY_DPS, "—");
        String hp      = prefs.getString(KEY_HP, "—");
        int    barrels = prefs.getInt(KEY_BARRELS, 0);

        RemoteViews views = new RemoteViews(ctx.getPackageName(), R.layout.widget_tank);
        views.setTextViewText(R.id.widget_tank_name, name);
        views.setTextViewText(R.id.widget_tank_tier,    tier > 0 ? "Tier " + tier : "");
        views.setTextViewText(R.id.widget_tank_dps,     "DPS\n" + dps);
        views.setTextViewText(R.id.widget_tank_hp,      "HP\n" + hp + "%");
        views.setTextViewText(R.id.widget_tank_barrels, "Стволов\n" + (barrels > 0 ? barrels : "—"));

        Intent launch = new Intent(ctx, MainActivity.class);
        launch.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pi = PendingIntent.getActivity(ctx, 0, launch,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        views.setOnClickPendingIntent(R.id.widget_tank_name, pi);
        views.setOnClickPendingIntent(R.id.widget_open_hint, pi);

        mgr.updateAppWidget(widgetId, views);
    }

    public static void notifyAll(Context ctx) {
        AppWidgetManager mgr = AppWidgetManager.getInstance(ctx);
        ComponentName cn = new ComponentName(ctx, TankWidget.class);
        for (int id : mgr.getAppWidgetIds(cn)) {
            updateWidget(ctx, mgr, id);
        }
    }

    public static void saveTankData(Context ctx, String name, int tier,
                                    double dps, int hpPct, int barrels) {
        SharedPreferences.Editor e = ctx.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE).edit();
        e.putString(KEY_NAME,    name);
        e.putInt(KEY_TIER,       tier);
        e.putString(KEY_DPS,     String.valueOf(Math.round(dps * 10) / 10.0));
        e.putString(KEY_HP,      String.valueOf(hpPct));
        e.putInt(KEY_BARRELS,    barrels);
        e.apply();
        notifyAll(ctx);
    }
}
