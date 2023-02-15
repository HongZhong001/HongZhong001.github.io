var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
        document.title = '突然好想你，你会在哪里！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
        document.title = '崽种，还知道回来！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
