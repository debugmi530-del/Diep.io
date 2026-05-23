package com.diepclone.app;

import android.util.Log;

import org.java_websocket.WebSocket;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.handshake.ServerHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.NetworkInterface;
import java.net.URI;
import java.util.Enumeration;
import java.util.concurrent.ConcurrentLinkedQueue;

public class MultiplayerManager {

    private static final String TAG = "DiepMP";
    private static final int MAX_PLAYERS = 10;

    private DiepServer server;
    private DiepClient client;
    private volatile String role = "none";
    private final ConcurrentLinkedQueue<String> msgQueue = new ConcurrentLinkedQueue<>();

    private class DiepServer extends WebSocketServer {
        DiepServer(int port) {
            super(new InetSocketAddress(port));
            setReuseAddr(true);
        }

        @Override
        public void onOpen(WebSocket conn, ClientHandshake hs) {
            if (getConnections().size() > MAX_PLAYERS) {
                conn.close(1000, "full");
                return;
            }
            Log.d(TAG, "Peer connected");
            msgQueue.add("{\"type\":\"_peerConnected\"}");
        }

        @Override
        public void onClose(WebSocket conn, int code, String reason, boolean remote) {
            Log.d(TAG, "Peer disconnected: " + code);
            msgQueue.add("{\"type\":\"_peerDisconnected\"}");
        }

        @Override
        public void onMessage(WebSocket conn, String message) {
            msgQueue.add(message);
            for (WebSocket c : getConnections()) {
                if (c != conn && c.isOpen()) {
                    try { c.send(message); } catch (Exception ignored) {}
                }
            }
        }

        @Override
        public void onError(WebSocket conn, Exception ex) {
            String m = ex.getMessage();
            if (m == null) m = ex.getClass().getSimpleName();
            msgQueue.add("{\"type\":\"_error\",\"msg\":\"" + m.replace("\"", "'") + "\"}");
            Log.e(TAG, "Server error", ex);
        }

        @Override
        public void onStart() {
            Log.d(TAG, "Server started on port " + getPort());
            msgQueue.add("{\"type\":\"_serverStarted\"}");
        }
    }

    private class DiepClient extends WebSocketClient {
        DiepClient(URI uri) {
            super(uri);
        }

        @Override
        public void onOpen(ServerHandshake hs) {
            Log.d(TAG, "Connected to host");
            msgQueue.add("{\"type\":\"_clientConnected\"}");
        }

        @Override
        public void onMessage(String message) {
            msgQueue.add(message);
        }

        @Override
        public void onClose(int code, String reason, boolean remote) {
            Log.d(TAG, "Disconnected: " + code);
            String r = reason != null ? reason.replace("\"", "'") : "";
            msgQueue.add("{\"type\":\"_clientDisconnected\",\"reason\":\"" + r + "\"}");
            if ("client".equals(role)) role = "none";
        }

        @Override
        public void onError(Exception ex) {
            String m = ex.getMessage();
            if (m == null) m = ex.getClass().getSimpleName();
            msgQueue.add("{\"type\":\"_error\",\"msg\":\"" + m.replace("\"", "'") + "\"}");
            Log.e(TAG, "Client error", ex);
        }
    }

    public String startServer(int port) {
        stopAll();
        try {
            server = new DiepServer(port);
            server.start();
            role = "host";
            return "ok";
        } catch (Exception e) {
            Log.e(TAG, "startServer failed", e);
            server = null;
            role = "none";
            return "error:" + e.getMessage();
        }
    }

    public void stopServer() {
        if (server != null) {
            try { server.stop(500); } catch (Exception ignored) {}
            server = null;
        }
        if ("host".equals(role)) role = "none";
    }

    public String connectClient(String host, int port) {
        disconnectClient();
        try {
            URI uri = new URI("ws://" + host + ":" + port);
            client = new DiepClient(uri);
            client.connect();
            role = "client";
            return "ok";
        } catch (Exception e) {
            Log.e(TAG, "connect failed", e);
            client = null;
            role = "none";
            return "error:" + e.getMessage();
        }
    }

    public void disconnectClient() {
        if (client != null) {
            try { client.close(); } catch (Exception ignored) {}
            client = null;
        }
        if ("client".equals(role)) role = "none";
    }

    public void stopAll() {
        stopServer();
        disconnectClient();
        msgQueue.clear();
    }

    public void send(String json) {
        if (client != null && client.isOpen()) {
            try { client.send(json); } catch (Exception ignored) {}
        }
    }

    public void broadcast(String json) {
        if (server != null) {
            try { server.broadcast(json); } catch (Exception ignored) {}
        }
    }

    public String pollMessages() {
        if (msgQueue.isEmpty()) return "[]";
        StringBuilder sb = new StringBuilder("[");
        int count = 0;
        String msg;
        while ((msg = msgQueue.poll()) != null && count < 50) {
            if (count > 0) sb.append(',');
            sb.append(msg);
            count++;
        }
        sb.append(']');
        return sb.toString();
    }

    public String getRole() { return role; }

    public int getPeerCount() {
        if (server != null) return server.getConnections().size();
        return 0;
    }

    public static String getLocalIp() {
        try {
            Enumeration<NetworkInterface> ifaces = NetworkInterface.getNetworkInterfaces();
            while (ifaces != null && ifaces.hasMoreElements()) {
                NetworkInterface iface = ifaces.nextElement();
                if (!iface.isUp() || iface.isLoopback()) continue;
                Enumeration<InetAddress> addrs = iface.getInetAddresses();
                while (addrs.hasMoreElements()) {
                    InetAddress addr = addrs.nextElement();
                    if (!addr.isLoopbackAddress() && addr instanceof Inet4Address) {
                        String ip = addr.getHostAddress();
                        if (ip != null && !ip.startsWith("169.")) return ip;
                    }
                }
            }
        } catch (Exception e) {
            Log.e(TAG, "getLocalIp error", e);
        }
        return "0.0.0.0";
    }
}
