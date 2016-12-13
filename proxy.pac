function FindProxyForURL(url, host) {
    if (isInNet(host, "127.0.0.1", "255.255.255.0"))
        return "DIRECT";
    else
        return "PROXY 192.168.127.193:8888";
}