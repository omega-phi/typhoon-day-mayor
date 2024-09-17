module.exports = {
    typhoonData: [{
        'id': '0',
        'name': '颱風 1',
        'data': [
            {
                "time": 1717494801974,    // 時間 (unix time)
                "longitude": 125.2123,    // 經度
                "latitude": 21.0123,    // 緯度
                "scale": "mild",    // 輕度颱風
                "radius": 100        // 半徑(公里)
            },
            {
                "time": 1717505801974,
                "longitude": 123.0123,
                "latitude": 21.5123,
                "scale": "moderate",    //中度颱風
                "radius": 100
            }
        ],
        'predictData': [
            {
                "time": 1717515801974,
                "longitude": 121.5123,
                "latitude": 23.0123,
                "scale": "severe",    //強烈颱風
                "radius": 100
            }
        ],
        'actualData': [
            {
                "time": 1717515801974,
                "longitude": 122.1123,
                "latitude": 22.5123,
                "scale": "severe",    //強烈颱風
                "radius": 100
            }
        ],
        'meetStandard': ['Taipei', 'Hualien']
    }]
}