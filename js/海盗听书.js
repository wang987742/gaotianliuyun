// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// 道长 drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// 道长 drpy写源 模板规则说明 https://gitcode.net/supertlo/dr_py#%E6%A8%A1%E6%9D%BF%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E
// 道长 drpy写源 套模模版 https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/%E6%A8%A1%E6%9D%BF.js
// 道长 drpy写源 影片教程 http://101.34.67.237:5244/%E6%95%99%E8%82%B2/drpy
// 道长 drpy写源 影片教程(m3u8切片) https://freedrpy.run.goorm.io/txt/jc/playlist.m3u8
// 海阔下载 https://haikuo.lanzoui.com/u/GoldRiver
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel

// Pluto: 嗅探播放 完全正常
// 俊老的殼 或 PythonBox: 請在rules新增底下設定,确保能嗅探较多的源
// "rules":[
// 海盗听书(drpy)
// {"host":"www.tingxiaoshuo.cc","rule":["baidupcs.com","/file/"]},
// {"host":"www.tingxiaoshuo.cc","rule":["365ting.com"]},
// {"host":"www.tingxiaoshuo.cc","rule":["tingshijie.com"]},
// {"host":"www.tingxiaoshuo.cc","rule":["xmcdn.com"]},
// {"host":"www.tingxiaoshuo.cc","rule":["vb.wting.info","token="]}
// ],

var rule = {
    title:'海盗听书',
    host:'https://www.tingxiaoshuo.cc',
    homeUrl:'/category/6/3.html',
    url:'/category/6/fyclass.html?page=fypage',
    searchUrl:'/pc/index/search.html?keyword=**&page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    class_name:'新书&更新&人气',
    class_url:'1&2&3',
    play_parse:true,
    play_json:0,
    lazy:"js:let bookId=input.match(/play\\/(.*?)\\//)[1];let chapterId=input.match(/.*\\/(.*?)\\.html/)[1];let url='https://app.tingxiaoshuo.cc/listen/apptingchina/AppGetChapterUrl2022?uid=09e0bbefd378830f9615a98f239aceab&chapterId='+chapterId+'&bookId='+bookId;log(url);let res=request(url,{headers:{'User-Agent':PC_UA}});res=JSON.parse(res);input=res.src;log(input);",
    limit:6,
    double:true,
    推荐:'*',
    一级:'.list-works li;a&&title;img&&src;.list-book-cs span:eq(0)&&Text;a&&href',
    二级:{title:'h1&&Text;.book-info dd:eq(1)&&Text',img:'.book-img img&&src',desc:';;.book-info dd:gt(3):lt(6)&&Text;.book-info dd:eq(3)&&Text;.book-info dd:eq(2)&&Text',content:'.div-b&&Text',tabs:'.playlist-top&&h2',lists:'#playlist:eq(#id) li'},
    搜索:'*',
    // 预处理:'log("我是预处理");let html=request("https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/version.txt");log(html);rule_fetch_params.headers.Cookie="searchneed=ok";',
}
