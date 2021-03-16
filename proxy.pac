function FindProxyForURL(url, host) {
    if (shExpMatch(host, "melalu.office-devel")) {
        return 'PROXY mail.office.pi-pe.biz:13132';
    }
    return 'DIRECT';
}
