// 一级 /vodshow/ 数字验证
var rule = {
    title:'干饭影视',
    host:'https://www.gfysys1.com',
    // homeUrl:'/',
    url:'/vodtype/fyclass-fypage.html',
	// url:'/vodshow/fyclassfyfilter.html',
    // filterable:1,//是否启用分类筛选,
    // filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
    // filter: {"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"武侠","v":"武侠"},{"n":"冒险","v":"冒险"},{"n":"悬疑","v":"悬疑"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"古装"},{"n":"爱情","v":"爱情"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"韩国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"真人秀","v":"真人秀"},{"n":"选秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"访谈","v":"访谈"},{"n":"播报","v":"播报"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"纪实","v":"纪实"},{"n":"曲艺","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"财经","v":"财经"},{"n":"求职","v":"求职"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"动画","v":"动画"},{"n":"科幻","v":"科幻"},{"n":"热血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"萝莉","v":"萝莉"},{"n":"动作","v":"动作"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"香港","v":"香港"},{"n":"韩国","v":"韩国"},{"n":"台湾","v":"台湾"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]},
    headers:{
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,
    // class_name:'电影&网剧&剧集&动漫&综艺&记录',
    // class_url:'20&1&2&3&4&23',
    class_parse:'.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    // lazy:'干饭',
    // lazy:'@js:cacheUrl = d.getParse(input);print(cacheUrl);input=cacheUrl',
    // lazy:'js:cacheUrl = d.getParse(input);print(cacheUrl);input=cacheUrl',
    // lazy:'js:cacheUrl=d.getParse(input);if(cacheUrl){input=cacheUrl}else{try{let html=fetch(input,{headers:d.headers,timeout:d.timeout,encoding:d.encoding});let ret=html.match(/var player_(.*?)=(.*?)</)[2];let url=JSON.parse(ret).url;if(url.length>10){real_url="https://player.buyaotou.xyz/?url="+url;d.saveParse(input,real_url);input=real_url}}catch(e){print("网络请求发生错误:"+e.message)}}',
    lazy:'js:cacheUrl=getParse(input);if(cacheUrl){input=cacheUrl}else{try{let html=fetch(input,fetch_params);let ret=html.match(/var player_(.*?)=(.*?)</)[2];let url=JSON.parse(ret).url;if(url.length>10){real_url="https://player.buyaotou.xyz/?url="+url;saveParse(input,real_url);input=real_url}}catch(e){print("网络请求发生错误:"+e.message)}}',
    limit:5,
    推荐:'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'body .stui-vodlist__box;a&&title;.lazyload&&data-original;;a&&href',
    // 二级:{"title":"h1.title&&Text;.stui-content__detail p:eq(1)&&Text","img":".lazyload&&data-original","desc":".stui-content__detail p:eq(-3)&&Text;.stui-content__detail p:eq(-2)&&Text","content":".stui-content__detail p.detail&&Text","tabs":".stui-pannel__head ul li","lists":".stui-content__playlist:eq(#id) li"},
    二级:{"title":"h1.title&&Text;.stui-content__detail p:eq(1)&&Text","img":".lazyload&&data-original","desc":";;;.stui-content__detail p:eq(6)&&Text;.stui-content__detail p:eq(5)&&Text","content":".stui-content__detail p.detail&&Text","tabs":".stui-pannel__head ul li","lists":".stui-content__playlist:eq(#id) li"},
    // 搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}