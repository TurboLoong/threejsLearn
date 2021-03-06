/**
     * 创建场景对象Scene
     */
 const scene = new THREE.Scene();
 /**
  * 创建网格模型
  */
 const geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
 const material = new THREE.MeshLambertMaterial({
   color: 0x0000ff
 }); //材质对象Material
 const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
 scene.add(mesh); //网格模型添加到场景中
 /**
  * 光源设置
  */
 //点光源
 const point = new THREE.PointLight(0xffffff);
 point.position.set(400, 200, 300); //点光源位置
 scene.add(point); //点光源添加到场景中
 //环境光
 const ambient = new THREE.AmbientLight(0x444444);
 scene.add(ambient);
 /**
  * 相机设置
  */
 const width = window.innerWidth; //窗口宽度
 const height = window.innerHeight; //窗口高度
 // 与输出画布canvas的宽高比例保持一致
 // const width = 600; //canvas画布宽度
 // const height = 800; //canvas画布高度
 const k = width / height; //canvas画布宽高比
 const s = 150; //三维场景显示范围控制系数，系数越大，显示的范围越大
 //创建相机对象
 const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
 camera.position.set(200, 300, 200); //设置相机位置
 camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
 /**
  * 创建渲染器对象
  */
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(width, height); //设置渲染区域尺寸
 // 设置渲染区域尺寸，本质就是设置输出canvas的尺寸
 renderer.setSize(width, height);
 // renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
 // document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
 // 把渲染器的渲染结果canvas对象插入到'pos'对应的div元素中
 document.getElementById('pos').appendChild(renderer.domElement);

 // 渲染函数
 function render() {
   renderer.render(scene, camera); //执行渲染操作
   requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
 }
 render();
 //创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
 const controls = new THREE.OrbitControls(camera, renderer.domElement);


 //监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
 controls.addEventListener('change', render);