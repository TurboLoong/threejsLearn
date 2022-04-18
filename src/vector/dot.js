const p1 = new THREE.Vector3(0, 0, 0);
const p2 = new THREE.Vector3(20, 0, 0);
const p3 = new THREE.Vector3(0, 40, 0);

// 三角形两条边夹脚余弦值
const v1 = p1.clone().sub(p2);
const v2 = p1.clone().sub(p3);

const cosineValue = v1.dot(v2) / (v1.length() * v2.length())
console.log('三角形两条边夹脚余弦值', cosineValue);

// 面积
function AreaOfTriangle(p1, p2, p3) {
  const v1 = p1.clone().sub(p2);
  const v2 = p1.clone().sub(p3);
  
  const v3 = new THREE.Vector3();
  v3.crossVectors(v1, v2);
  const s = v3.length()/2;
  return s
}

const geometry = new THREE.BoxGeometry(10, 10, 10);
const  position = geometry.attributes.position;
let area = 0.0;
const triangleCount = geometry.index.count/3;
const triangle = [];
const pointList = []
for (let index = 0; index < position.count; index++) {
  const x = position.getX(index);
  const y = position.getY(index);
  const z = position.getZ(index);
  const point = new THREE.Vector3(x, y, z)
  pointList.push(point)
}


for (let index = 0; index < geometry.index.count; index+=3) {
  area += AreaOfTriangle(pointList[geometry.index.array[index]], pointList[geometry.index.array[index+1]], pointList[geometry.index.array[index+2]])
}

console.log(area);