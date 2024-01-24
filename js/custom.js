// ページスクロール
$('a[href^="#"]').click(function () {
    const speed = 800;
    const headerHight = 58;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top-headerHight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
});

// マウスストーカー
const stalker = document.getElementById('js-mouse');
let hovFlag = false;

document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;
        stalker.classList.add('is_active');
    });
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is_active');
    });
}