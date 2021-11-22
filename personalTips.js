let calcForPersonalTips=function(daily,lang){
    let ans='';
    let 节假日表=[
        {date:['01-01'],text:'元旦快乐!',en:'Happy New Year\'s Day!'},
        {date:['10-01','10-02','10-03'],text:'国庆放几天鸭？',en:'National Day, how many days off?'},
        {date:['03-08'],text:'三八妇女节',en:'Women\'s Day'},
        {date:['05-04'],text:'五四青年节',en:'May 4th Youth Day'},
        {date:['06-01'],text:'永远要过儿童节！',en:'children\'s day always!'},
    ];
    for(let i=0;i<节假日表.length;i++){
        let fesi=节假日表[i];
        let check=false;
        for(let j=0;j<fesi.date.length;j++){
            if(daily.date.indexOf('-'+fesi.date[j])!=-1){
                check=true;
            }
        }
        if(check){
            ans+=(lang==''?fesi.text:fesi.en)+'\n';
        }
    }
    let 天气分类=function(code){
        code=parseInt(code);
        if(code>=0&&code<=3){
            return '晴';
        }else if(code>=4&&code<=9){
            return '云';
        }else if(code>=10&&code<=20){
            return '雨';
        }else if(code>=21&&code<=25){
            return '雪';
        }else if(code>=26&&code<=36){
            return '风尘';
        }else{
            return '';
        }
    }
    let dayClass=天气分类(daily.code_day);
    let nightClass=天气分类(daily.code_night);
    let existClass=function(tclass){
        return dayClass==tclass||nightClass==tclass;
    }
    if(existClass('雨')){
        ans+=(lang==''?'注意带伞\n':'Umbrella needed\n');
    }else if(existClass('雪')){
        ans+=(lang==''?'雪不爱伞？\n':'Snow dislikes umbrella\n');
    }else if(existClass('风尘')){
        ans+=(lang==''?'风尘漫漫\n':'Wind or dirt?\n');
    }else if(existClass('云')){
        ans+=(lang==''?'云会有心事吗\n':'Can Clouds think?\n');
    }else if(existClass('')){
        ans+=(lang==''?'离谱\n':'Unexpected?\n');
    }else{
        ans+=(lang==''?'没啥说的了\n':'Nothing to say\n');
    }
    let highTemp=parseInt(daily.high);
    let lowTemp=parseInt(daily.low);
    if(highTemp>=30){
        ans+=(lang==''?'热就对了\n':'So hot, right?\n');
    }
    if(lowTemp<=10){
        ans+=(lang==''?'注意保暖\n':'To wear enough\n');
    }
    if(highTemp-lowTemp>=10){
        ans+=(lang==''?'适时增减衣物\n':'Pay attention to\nthe temperature difference\n');
    }
    /*
    参数解释 lang: 
        '' 或者 '&lang=en'
    参数解释 daily:{           

        date: "2021-11-16",
        code_day: "9",          //白天天气现象代码
        code_night: "13",       //晚间天气现象代码
        low: "12",              //当天最低温度
        high: "20",             //当天最高温度

        humidity: "85",         //相对湿度，0~100

        precip: "0.36",         //降雨概率
        rainfall: "0.17",       //降水量，单位mm

        0	晴（国内城市白天晴）	Sunny	
        1	晴（国内城市夜晚晴）	Clear	
        2	晴（国外城市白天晴）	Fair	
        3	晴（国外城市夜晚晴）	Fair	
        4	多云	Cloudy	
        5	晴间多云	Partly Cloudy	
        6	晴间多云	Partly Cloudy	
        7	大部多云	Mostly Cloudy	
        8	大部多云	Mostly Cloudy	
        9	阴	Overcast	
        10	阵雨	Shower	
        11	雷阵雨	Thundershower	
        12	雷阵雨伴有冰雹	Thundershower with Hail	
        13	小雨	Light Rain	
        14	中雨	Moderate Rain	
        15	大雨	Heavy Rain	
        16	暴雨	Storm	
        17	大暴雨	Heavy Storm	
        18	特大暴雨	Severe Storm	
        19	冻雨	Ice Rain	
        20	雨夹雪	Sleet	
        21	阵雪	Snow Flurry	
        22	小雪	Light Snow	
        23	中雪	Moderate Snow	
        24	大雪	Heavy Snow	
        25	暴雪	Snowstorm	
        26	浮尘	Dust	
        27	扬沙	Sand	
        28	沙尘暴	Duststorm	
        29	强沙尘暴	Sandstorm	
        30	雾	Foggy	
        31	霾	Haze	
        32	风	Windy	
        33	大风	Blustery	
        34	飓风	Hurricane	
        35	热带风暴	Tropical Storm	
        36	龙卷风	Tornado	
        37	冷	Cold	
        38	热	Hot	
        99  未知 Unknown
    }
    */
    return ans;
}
