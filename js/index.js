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
    const geometry = new THREE.SphereGeometry(200, 128, 128);
    const material = new THREE.MeshLambertMaterial({
        color: 0X3381EA
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // ライトを作る
    const light = new THREE.DirectionalLight(0xFFFFFF)
    light.intensity = 1; // 光の強さ倍
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
        const targetX = (mouseX - window.innerWidth / 4) * 0.001;
        const targetY = (mouseY - window.innerHeight / 4) * 0.001;
    
        // boxとマウスの位置の差分を計算
        const diffX = targetX - box.position.x;
        const diffY = targetY - box.position.y;
    
        // 差分に基づいてboxの位置を更新
        box.position.x += diffX * 0.05;
        box.position.y += diffY * 0.05;
    
        // マウスが近づくとboxが変形するようにスケールを更新
        const distance = Math.sqrt(diffX * diffX + diffY * diffY);
        const scale = Math.max(0.1, 1 - distance * 0.1);
        box.scale.set(scale, scale, scale);
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