$('a[href^="#"]').click(function () {
    const speed = 800;
    const headerHight = 58; 
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top-headerHight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
});

$(function(){
    const mouse = $("#js-mouse");
    $(document).on("mousemove",function(e){
        const x=e.clientX;
        const y=e.clientY;
        mouse.css({
            "opacity": "1",
            "transform": "translate(" + x + "px," + y + "px)",
        });
    });
});