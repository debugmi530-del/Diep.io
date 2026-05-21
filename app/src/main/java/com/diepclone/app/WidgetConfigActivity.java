package com.diepclone.app;

import android.app.Activity;
import android.appwidget.AppWidgetManager;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONObject;

public class WidgetConfigActivity extends Activity {

    private int widgetId = AppWidgetManager.INVALID_APPWIDGET_ID;
    private JSONArray tanks = new JSONArray();
    private int selectedIdx = 0;
    private String selectedTheme = "dark";

    private ImageView previewImage;
    private TextView  previewName;
    private LinearLayout tankListLayout;
    private CheckBox cbDps, cbHp, cbBarrels, cbSpeed, cbDesc, cbAnim;
    private Button btnDark, btnNeon, btnMinimal;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Extract widget ID
        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            widgetId = extras.getInt(AppWidgetManager.EXTRA_APPWIDGET_ID,
                    AppWidgetManager.INVALID_APPWIDGET_ID);
        }
        if (widgetId == AppWidgetManager.INVALID_APPWIDGET_ID) {
            setResult(RESULT_CANCELED);
            finish();
            return;
        }

        // Default result = CANCELED (user backs out)
        setResult(RESULT_CANCELED, makeResultIntent());

        setContentView(R.layout.activity_widget_config);

        previewImage   = findViewById(R.id.cfg_tank_preview);
        previewName    = findViewById(R.id.cfg_preview_name);
        tankListLayout = findViewById(R.id.cfg_tank_list);
        cbDps     = findViewById(R.id.cfg_show_dps);
        cbHp      = findViewById(R.id.cfg_show_hp);
        cbBarrels = findViewById(R.id.cfg_show_barrels);
        cbSpeed   = findViewById(R.id.cfg_show_speed);
        cbDesc    = findViewById(R.id.cfg_show_desc);
        cbAnim    = findViewById(R.id.cfg_anim_pulse);
        btnDark    = findViewById(R.id.cfg_theme_dark);
        btnNeon    = findViewById(R.id.cfg_theme_neon);
        btnMinimal = findViewById(R.id.cfg_theme_minimal);

        // Load saved prefs
        SharedPreferences prefs = getSharedPreferences(TankWidget.PREF_NAME, MODE_PRIVATE);
        cbDps.setChecked(prefs.getBoolean(TankWidget.KEY_SHOW_DPS,     true));
        cbHp.setChecked(prefs.getBoolean(TankWidget.KEY_SHOW_HP,       true));
        cbBarrels.setChecked(prefs.getBoolean(TankWidget.KEY_SHOW_BARRELS, true));
        cbSpeed.setChecked(prefs.getBoolean(TankWidget.KEY_SHOW_SPEED, true));
        cbDesc.setChecked(prefs.getBoolean(TankWidget.KEY_SHOW_DESC,   true));
        selectedTheme = prefs.getString(TankWidget.KEY_THEME, "dark");
        selectedIdx   = prefs.getInt(TankWidget.KEY_IDX_PREFIX + widgetId, 0);

        // Load tanks JSON
        String json = prefs.getString(TankWidget.KEY_TANKS_JSON, "[]");
        try { tanks = new JSONArray(json); } catch (Exception ignored) { tanks = new JSONArray(); }

        updateThemeButtons();
        buildTankList();
        updatePreview();

        // Theme buttons
        btnDark.setOnClickListener(v -> { selectedTheme = "dark";    updateThemeButtons(); updatePreview(); });
        btnNeon.setOnClickListener(v -> { selectedTheme = "neon";    updateThemeButtons(); updatePreview(); });
        btnMinimal.setOnClickListener(v -> { selectedTheme = "minimal"; updateThemeButtons(); updatePreview(); });

        // Save
        findViewById(R.id.cfg_save_btn).setOnClickListener(v -> saveAndFinish());
        // Cancel
        findViewById(R.id.cfg_cancel_btn).setOnClickListener(v -> {
            setResult(RESULT_CANCELED);
            finish();
        });
    }

    private void buildTankList() {
        tankListLayout.removeAllViews();
        if (tanks.length() == 0) {
            TextView empty = new TextView(this);
            empty.setText("Нет сохранённых танков. Создай их в конструкторе!");
            empty.setTextColor(0x88FFFFFF);
            empty.setTextSize(12f);
            tankListLayout.addView(empty);
            return;
        }

        for (int i = 0; i < tanks.length(); i++) {
            final int idx = i;
            try {
                JSONObject t = tanks.getJSONObject(i);
                String name  = t.optString("name", "Танк");
                int tier     = t.optInt("tier", 3);

                Button btn = new Button(this);
                btn.setText("T" + tier + "  " + name);
                btn.setTextSize(12f);
                btn.setTextColor(0xFFFFFFFF);

                int[] tierColors = {0xFF44AAFF, 0xFFE0E0E0, 0xFF22CC55, 0xFFFFDD00, 0xFFFF8800};
                int tc = (tier >= 1 && tier <= 5) ? tierColors[tier - 1] : tierColors[2];

                updateTankBtn(btn, idx == selectedIdx, tc);
                btn.setOnClickListener(v -> {
                    selectedIdx = idx;
                    // refresh all buttons
                    for (int j = 0; j < tankListLayout.getChildCount(); j++) {
                        View child = tankListLayout.getChildAt(j);
                        if (child instanceof Button) {
                            try {
                                JSONObject tj = tanks.getJSONObject(j);
                                int tj_tier = tj.optInt("tier", 3);
                                int tcj = (tj_tier >= 1 && tj_tier <= 5) ? tierColors[tj_tier - 1] : tierColors[2];
                                updateTankBtn((Button) child, j == idx, tcj);
                            } catch (Exception ignored) {}
                        }
                    }
                    updatePreview();
                });

                LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
                        LinearLayout.LayoutParams.MATCH_PARENT,
                        LinearLayout.LayoutParams.WRAP_CONTENT);
                lp.setMargins(0, 0, 0, 8);
                btn.setLayoutParams(lp);
                tankListLayout.addView(btn);

            } catch (Exception ignored) {}
        }
    }

    private void updateTankBtn(Button btn, boolean selected, int tierColor) {
        if (selected) {
            btn.setBackgroundColor(tierColor & 0x00FFFFFF | 0x66000000);
            btn.setTextColor(tierColor);
        } else {
            btn.setBackgroundColor(0x22FFFFFF);
            btn.setTextColor(0xAAFFFFFF);
        }
    }

    private void updateThemeButtons() {
        int activeAlpha   = 0xFF334488;
        int inactiveAlpha = 0x22FFFFFF;
        btnDark.setBackgroundColor("dark".equals(selectedTheme)    ? activeAlpha : inactiveAlpha);
        btnNeon.setBackgroundColor("neon".equals(selectedTheme)    ? 0xFF220055  : inactiveAlpha);
        btnMinimal.setBackgroundColor("minimal".equals(selectedTheme) ? 0xFF333333 : inactiveAlpha);
        btnDark.setTextColor("dark".equals(selectedTheme)    ? 0xFFFFFFFF : 0x88FFFFFF);
        btnNeon.setTextColor("neon".equals(selectedTheme)    ? 0xFFFFFFFF : 0x88FFFFFF);
        btnMinimal.setTextColor("minimal".equals(selectedTheme) ? 0xFFFFFFFF : 0x88FFFFFF);
    }

    private void updatePreview() {
        if (tanks.length() == 0) {
            previewName.setText("Нет танков");
            return;
        }
        if (selectedIdx >= tanks.length()) selectedIdx = 0;
        try {
            JSONObject t   = tanks.getJSONObject(selectedIdx);
            String name    = t.optString("name", "Танк");
            int    tier    = t.optInt("tier", 3);
            String color   = t.optString("color", "#4488ff");
            String special = t.optString("specialType", "normal");
            JSONArray barrelData = t.optJSONArray("barrelData");

            int[] tierColors = {0xFF44AAFF, 0xFFE0E0E0, 0xFF22CC55, 0xFFFFDD00, 0xFFFF8800};
            int tc = (tier >= 1 && tier <= 5) ? tierColors[tier - 1] : tierColors[2];

            Bitmap bmp = TankWidget.drawTankBitmap(color, barrelData, special, tc, tier, 0f, true, selectedTheme);
            previewImage.setImageBitmap(bmp);
            previewName.setText(name + " · T" + tier);
        } catch (Exception e) {
            previewName.setText("Ошибка предпросмотра");
        }
    }

    private void saveAndFinish() {
        SharedPreferences.Editor ed = getSharedPreferences(TankWidget.PREF_NAME, MODE_PRIVATE).edit();
        ed.putBoolean(TankWidget.KEY_SHOW_DPS,     cbDps.isChecked());
        ed.putBoolean(TankWidget.KEY_SHOW_HP,      cbHp.isChecked());
        ed.putBoolean(TankWidget.KEY_SHOW_BARRELS, cbBarrels.isChecked());
        ed.putBoolean(TankWidget.KEY_SHOW_SPEED,   cbSpeed.isChecked());
        ed.putBoolean(TankWidget.KEY_SHOW_DESC,    cbDesc.isChecked());
        ed.putBoolean(TankWidget.KEY_ANIM_PULSE,   cbAnim.isChecked());
        ed.putString(TankWidget.KEY_THEME,         selectedTheme);
        ed.putInt(TankWidget.KEY_IDX_PREFIX + widgetId, selectedIdx);
        ed.apply();

        // Force widget update
        AppWidgetManager mgr = AppWidgetManager.getInstance(this);
        TankWidget.updateWidget(this, mgr, widgetId);

        setResult(RESULT_OK, makeResultIntent());
        finish();
    }

    private Intent makeResultIntent() {
        Intent result = new Intent();
        result.putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, widgetId);
        return result;
    }
}
