async function ipnbrowserdataform() {
    let ip = await fetch("/api/get/ip")
        .then((response) => response.json())
        .then((data) => data.ip);
    if (getls("ip") == null || getls("ip") == undefined || getls("ip").trim() == "" || getls("ip") != ip || !checkCookie('ip') || getls('ip')!=getCookie("ip") || !checkCookie('uadata') || getls('uadata')!=getCookie("uadata")) {
        let ipdata = await fetch(
            "https://ipwho.is/" +
                ip +
                "?fields=ip,message,success,type,continent,continent_code,country,country_code,region,region_code,city,latitude,longitude,postal,calling_code,calling_code,capital,borders,flag,connection.isp,connection.domain,timezone"
        )
            .then((response) => response.json())
            .then((data) => data);
        setls("ip", ip);
        setCookie("ip", ip);
        forcookieip = encodeURI(JSON.stringify(ipdata));
        setCookie("ipdata", forcookieip, 1);
        for (const property in ipdata) {
            if (typeof ipdata[property] == "object") {
                for (const property2 in ipdata[property]) {
                    setls(property + "_" + property2, ipdata[property][property2]);
                }
            } else {
                setls(property, ipdata[property]);
            }
        }
    }
  
}