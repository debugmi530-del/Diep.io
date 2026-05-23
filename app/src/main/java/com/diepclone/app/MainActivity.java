package com.diepclone.app;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;

public class MainActivity extends Activity {

    private WebView webView;
    private final MultiplayerManager mpManager = new MultiplayerManager();

    class AndroidBridge {
        @JavascriptInterface
        public void exitApp() {
            finishAffinity();
        }

        /* Виджет: обновление всего списка танков (JSON) из JS */
        @JavascriptInterface
        public void updateWidgetAll(String tanksJson) {
            TankWidget.saveAllTanks(MainActivity.this, tanksJson);
        }

        /* ── Multiplayer bridge ─────────────────────────────────────────── */

        /** Returns this device's local Wi-Fi IPv4 address. */
        @JavascriptInterface
        public String mpGetLocalIp() {
            return MultiplayerManager.getLocalIp();
        }

        /** Start a WebSocket server on the given port (host mode).
         *  Returns "ok" or "error:<message>". */
        @JavascriptInterface
        public String mpStartServer(int port) {
            return mpManager.startServer(port);
        }

        /** Stop the WebSocket server. */
        @JavascriptInterface
        public void mpStopServer() {
            mpManager.stopServer();
        }

        /** Connect to a host as a client.
         *  Returns "ok" or "error:<message>". */
        @JavascriptInterface
        public String mpConnect(String host, int port) {
            return mpManager.connectClient(host, port);
        }

        /** Disconnect from the host. */
        @JavascriptInterface
        public void mpDisconnect() {
            mpManager.disconnectClient();
        }

        /** Stop all multiplayer activity (server + client). */
        @JavascriptInterface
        public void mpStopAll() {
            mpManager.stopAll();
        }

        /** Send a JSON message.
         *  If client: sends to server.
         *  If host: use mpBroadcast instead. */
        @JavascriptInterface
        public void mpSend(String json) {
            mpManager.send(json);
        }

        /** Broadcast a JSON message to all connected clients (host only). */
        @JavascriptInterface
        public void mpBroadcast(String json) {
            mpManager.broadcast(json);
        }

        /** Poll pending inbound messages.
         *  Returns a JSON array string, e.g. [{...},{...}].
         *  Call this frequently (every 50ms) from JS. */
        @JavascriptInterface
        public String mpPoll() {
            return mpManager.pollMessages();
        }

        /** Returns current role: "host", "client", or "none". */
        @JavascriptInterface
        public String mpGetRole() {
            return mpManager.getRole();
        }

        /** Returns number of connected peers (clients connected to host). */
        @JavascriptInterface
        public int mpGetPeerCount() {
            return mpManager.getPeerCount();
        }
    }

    private void hideSystemUI() {
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        );
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        );
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        hideSystemUI();

        webView = new WebView(this);
        webView.addJavascriptInterface(new AndroidBridge(), "Android");

        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);

        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccessFromFileURLs(true);
        s.setAllowUniversalAccessFromFileURLs(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);
        s.setRenderPriority(WebSettings.RenderPriority.HIGH);

        webView.setWebViewClient(new WebViewClient());
        webView.setWebChromeClient(new WebChromeClient());

        setContentView(webView);
        webView.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemUI();
    }

    @Override
    public void onBackPressed() {
        webView.evaluateJavascript(
            "if(typeof window.__gamePause==='function'){window.__gamePause();}",
            null
        );
    }

    @Override
    protected void onResume() {
        super.onResume();
        webView.onResume();
        webView.resumeTimers();
        webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        hideSystemUI();
    }

    @Override
    protected void onPause() {
        super.onPause();
        webView.onPause();
        webView.pauseTimers();
        webView.evaluateJavascript(
            "if(typeof window.__gamePause==='function'&&window.__gamePauseActive!==true){window.__gamePause();}",
            null
        );
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mpManager.stopAll();
    }
}
