var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("爱你哟", "么么哒", "感谢支持", "欢迎再来", "么么哒", "爱你哟", "感谢支持" ,"欢迎再来", "爱你哟", "么么哒", "爱你哟", "么么哒");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
console.log("\n %c ES博客  %c https://www.eees.cn \n\n", "color:#f1ab0e;background:#030307;padding:5px 0;border-top-left-radius:8px;border-bottom-left-radius:8px", "background:#aa80ff;padding:5px 0;border-top-right-radius:8px;border-bottom-right-radius:8px");