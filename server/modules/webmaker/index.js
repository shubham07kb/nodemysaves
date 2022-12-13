function rssfeedcreate(){
    return `
    <?xml version="1.0" encoding="utf-8"?>
    <rss version="2.0">
    <channel>
    <title>Webmaker</title>
    <link>'/'</link>
    <description>Webmaker</description>
    </channel>
    </rss>
    `;
}

module.exports={
    rssfeedcreate: rssfeedcreate
}