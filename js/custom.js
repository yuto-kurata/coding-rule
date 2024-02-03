// ページ内リンクスムーススクロール
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            const speed = 800;
            const headerHight = 58;
            const href = elem.getAttribute("href");
            const target = document.querySelector(href == "#" || href == "" ? 'html' : href);
            const position = target.offsetTop - headerHight;
            window.scrollTo({ top: position, behavior: 'smooth' });
        });
    });
}

// マウスストーカー
function mouseStalker() {
    const stalker = document.getElementById('cursor-tracker');
    let hovFlag = false;

    document.addEventListener('mousemove', function (e) {
        stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
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
}

// 関数の実行
smoothScroll();
mouseStalker();