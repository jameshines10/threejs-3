/*global THREE:false */
'use strict';
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);

document.body.appendChild(renderer.domElement);

var triangle = new THREE.Geometry();
var square = new THREE.Geometry();

triangle.vertices.push(new THREE.Vector3(0, 20, 0));
triangle.vertices.push(new THREE.Vector3(-20, -20, 0));
triangle.vertices.push(new THREE.Vector3(20, -20, 0));

triangle.faces.push(new THREE.Face3(0, 1, 2));
triangle.faces[0].vertexColors[0] = new THREE.Color(0xff0000);
triangle.faces[0].vertexColors[1] = new THREE.Color(0x00ff00);
triangle.faces[0].vertexColors[2] = new THREE.Color(0x0000ff);

square.vertices.push(new THREE.Vector3(20, 20, 0));
square.vertices.push(new THREE.Vector3(-20, 20, 0));
square.vertices.push(new THREE.Vector3(-20, -20, 0));
square.vertices.push(new THREE.Vector3(20, -20, 0));

square.faces.push(new THREE.Face4(0, 1, 2, 3));

var triangleMaterial = new THREE.MeshBasicMaterial({
    vertexColors: THREE.VertexColors,
    side: THREE.DoubleSide
});
var squareMaterial = new THREE.MeshBasicMaterial({
    color: 0x7f7fff,
    side: THREE.DoubleSide
});

var triangleMesh = new THREE.Mesh(triangle, triangleMaterial);
var squareMesh = new THREE.Mesh(square, squareMaterial);

triangleMesh.position.x = -25;
squareMesh.position.x = 25;

scene.add(triangleMesh);
scene.add(squareMesh);

camera.position.z = 70;

var render = function () {
    requestAnimationFrame(render);
  
    triangleMesh.rotation.y += 0.03;
    squareMesh.rotation.x += 0.03;
  
    renderer.render(scene, camera);
};

render();