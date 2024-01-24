window.addEventListener("DOMContentLoaded", init);

function init() {
    const width = innerWidth;
    const height = innerHeight;

    //レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas"),
        // 背景の透過
        alpha:true
    })
    renderer.setSize(width, height);
    renderer.setPixelRatio('window' .devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    // シーンを作成
    const scene = new THREE.Scene();

    scene.fog = new THREE.Fog(0x000000, 50, 2000);

    // カメラを作る
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    // カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
    camera.position.set(-450, 0, 1000);

    // boxを作る
    const geometry = new THREE.SphereGeometry(100, 128, 128);
    const material = new THREE.MeshLambertMaterial({
        color: 0X3381EA
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // ライトを作る
    const light = new THREE.DirectionalLight(0xFFFFFF)
    light.intensity = 2; // 光の強さ倍
    light.position.set(1, 1, 1); // ライトの方向
    // シーンに追加
    scene.add(light);

    // レンダリング
    renderer.render(scene, camera);

    // 初回実行
    tick();

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const targetX = (mouseX - window.innerWidth / 1.5) * 0.001;
        const targetY = (mouseY - window.innerHeight / 2) * 0.001;

        box.position.x += targetX;
        box.position.y += targetY;
    });

    function tick() {
        requestAnimationFrame(tick);

        // 回転させる
        box.rotation.y += 0.01;
        box.rotation.x += 0.01;

        // レンダリング
        renderer.render(scene, camera);
    }
}