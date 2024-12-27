// ページ内リンクスムーススクロール
function smoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((elem) => {
		elem.addEventListener("click", (e) => {
			e.preventDefault();
			const speed = 800;
			const headerHight = 0;
			const href = elem.getAttribute("href");
			const target = document.querySelector(
				href == "#" || href == "" ? "html" : href,
			);
			const position = target.offsetTop - headerHight;
			window.scrollTo({ top: position, behavior: "smooth" });
		});
	});
}

// マウスストーカー
function mouseStalker() {
	const stalker = document.getElementById("cursor-tracker");
	let hovFlag = false;

	document.addEventListener("mousemove", function (e) {
		stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
	});

	const linkElem = document.querySelectorAll("a:not(.no_stick_)");
	for (let i = 0; i < linkElem.length; i++) {
		linkElem[i].addEventListener("mouseover", function (e) {
			hovFlag = true;
			stalker.classList.add("is_active");
		});
		linkElem[i].addEventListener("mouseout", function (e) {
			hovFlag = false;
			stalker.classList.remove("is_active");
		});
	}
}

// ナビゲーションに現在位置を示す
function presentLocation() {
	// ページの各セクションの位置を取得
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav_list-item a");

	// スクロールイベントを監視
	window.addEventListener("scroll", function () {
		// 現在のスクロール位置を取得
		// 現在のスクロール位置を取得
		const currentScroll = window.scrollY;

		// 現在のスクロール位置に応じて、ナビゲーションのリンクのスタイルを変更
		sections.forEach((section, index) => {
			if (
				section.offsetTop <= currentScroll &&
				section.offsetTop + section.offsetHeight > currentScroll
			) {
				navLinks[index].classList.add("active");
			} else {
				navLinks[index].classList.remove("active");
			}
		});
	});
}

// GSAP 特定要素にカーソルが入ると画像追従
function mouseover() {
	let container = document.getElementById("contents1");
	let image = document.getElementById("image");

	container.addEventListener("mouseover", function (e) {
		image.style.display = "block";
	});

	container.addEventListener("mouseout", function (e) {
		image.style.display = "none";
	});

	container.addEventListener("mousemove", function (e) {
		let offsetX = -300; // カーソルからのX方向のオフセット
		let offsetY = 0; // カーソルからのY方向のオフセット

		gsap.to(image, {
			duration: 0.8,
			left: e.pageX + offsetX,
			top: e.pageY + offsetY,
		});
	});
}

// 関数の実行
smoothScroll();
mouseStalker();
presentLocation();
mouseover();
