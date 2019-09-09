var controls, camera, scene, renderer;
var cameraCube, sceneCube;
var textureCube1, textureCube2, textureCube3, textureCube4,
		textureCube5, textureCube6, textureCube7, textureSphere;
var cubeMesh, sphereMesh;
var sphereMaterial;
init();
animate();

function init() {
  // CAMERAS
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 100000 );
	camera.position.set( 0, 0, 1000 );
	cameraCube = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 100000 );
	// SCENE
	scene = new THREE.Scene();
	sceneCube = new THREE.Scene();
	// Lights
	var ambient = new THREE.AmbientLight( 0xffffff );
	scene.add( ambient );
	// Textures
	var r1 = "textures/JG/";
	var urls1 = [ r1 + "cube5.jpg", r1 + "cube7.jpg",
							  r1 + "cube0.jpg", r1 + "cube8.jpg",
							  r1 + "cube4.jpg", r1 + "cube6.jpg" ];
	textureCube1 = new THREE.CubeTextureLoader().load( urls1 );
  textureCube1.format = THREE.RGBFormat;
	textureCube1.mapping = THREE.CubeReflectionMapping;
	textureCube1.encoding = THREE.sRGBEncoding;

	var r2 = "textures/WB/";
	var urls2 = [ r2 + "cube5.jpg", r2 + "cube7.jpg",
							  r2 + "cube0.jpg", r2 + "cube8.jpg",
							  r2 + "cube4.jpg", r2 + "cube6.jpg" ];
	textureCube2 = new THREE.CubeTextureLoader().load( urls2 );
	textureCube2.format = THREE.RGBFormat;
	textureCube2.mapping = THREE.CubeReflectionMapping;
	textureCube2.encoding = THREE.sRGBEncoding;

	var r3 = "textures/GS/";
	var urls3 = [ r3 + "cube5.jpg", r3 + "cube7.jpg",
							  r3 + "cube0.jpg", r3 + "cube8.jpg",
							  r3 + "cube4.jpg", r3 + "cube6.jpg" ];
	textureCube3 = new THREE.CubeTextureLoader().load( urls3 );
	textureCube3.format = THREE.RGBFormat;
	textureCube3.mapping = THREE.CubeReflectionMapping;
	textureCube3.encoding = THREE.sRGBEncoding;

	var r4 = "textures/TC/";
	var urls4 = [ r4 + "cube5.jpg", r4 + "cube7.jpg",
							 r4 + "cube0.jpg", r4 + "cube8.jpg",
							 r4 + "cube4.jpg", r4 + "cube6.jpg" ];
	textureCube4 = new THREE.CubeTextureLoader().load( urls4 );
	textureCube4.format = THREE.RGBFormat;
	textureCube4.mapping = THREE.CubeReflectionMapping;
	textureCube4.encoding = THREE.sRGBEncoding;

	var r5 = "textures/CO/";
	var urls5 = [ r5 + "cube5.jpg", r5 + "cube7.jpg",
							 r5 + "cube0.jpg", r5 + "cube8.jpg",
							 r5 + "cube4.jpg", r5 + "cube6.jpg" ];
	textureCube5 = new THREE.CubeTextureLoader().load( urls5 );
	textureCube5.format = THREE.RGBFormat;
	textureCube5.mapping = THREE.CubeReflectionMapping;
	textureCube5.encoding = THREE.sRGBEncoding;

	var r6 = "textures/G1/";
	var urls6 = [ r6 + "cube5.jpg", r6 + "cube7.jpg",
							 r6 + "cube0.jpg", r6 + "cube8.jpg",
							 r6 + "cube4.jpg", r6 + "cube6.jpg" ];
	textureCube6 = new THREE.CubeTextureLoader().load( urls6 );
	textureCube6.format = THREE.RGBFormat;
	textureCube6.mapping = THREE.CubeReflectionMapping;
	textureCube6.encoding = THREE.sRGBEncoding;

	var r7 = "textures/G2/";
	var urls7 = [ r7 + "cube5.jpg", r7 + "cube7.jpg",
							 r7 + "cube0.jpg", r7 + "cube8.jpg",
							 r7 + "cube4.jpg", r7 + "cube6.jpg" ];
	textureCube7 = new THREE.CubeTextureLoader().load( urls7 );
	textureCube7.format = THREE.RGBFormat;
	textureCube7.mapping = THREE.CubeReflectionMapping;
	textureCube7.encoding = THREE.sRGBEncoding;

  // Materials
	var cubeShader = THREE.ShaderLib[ "cube" ];
	var cubeMaterial = new THREE.ShaderMaterial( {
    fragmentShader: cubeShader.fragmentShader,
		vertexShader: cubeShader.vertexShader,
		uniforms: cubeShader.uniforms,
		depthWrite: false,
		side: THREE.BackSide
	} );
	// cubeMaterial.uniforms[ "tCube" ].value = textureCube;
	Object.defineProperty( cubeMaterial, 'map', {
		get: function () {
				return this.uniforms.tCube.value;
		}
	} );
	// Skybox
	cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 100, 100 ), cubeMaterial );
	sceneCube.add( cubeMesh );
	//
	var geometry = new THREE.SphereBufferGeometry( 400.0, 48, 24 );
	sphereMaterial = new THREE.MeshLambertMaterial();
	sphereMesh = new THREE.Mesh( geometry, sphereMaterial );
	scene.add( sphereMesh );
	//
	renderer = new THREE.WebGLRenderer();
	renderer.autoClear = false;
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	renderer.gammaOutput = true;
	//
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.minDistance = 500;
	controls.maxDistance = 2500;
	//
	var params = {
	   Japanese_Garden: function () {
		     cubeMesh.material = cubeMaterial;
				 cubeMesh.visible = true;
				 sphereMaterial.envMap = textureCube1;
				 sphereMaterial.needsUpdate = true;
		 },
		 Wilkins_Building: function () {
			   cubeMesh.material = cubeMaterial;
			   cubeMesh.visible = true;
			   sphereMaterial.envMap = textureCube2;
			   sphereMaterial.needsUpdate = true;
	 	 },
		 Gorden_Square: function () {
				 cubeMesh.material = cubeMaterial;
				 cubeMesh.visible = true;
				 sphereMaterial.envMap = textureCube3;
				 sphereMaterial.needsUpdate = true;
		 },
		 Temple_Church: function () {
			   cubeMesh.material = cubeMaterial;
			   cubeMesh.visible = true;
			   sphereMaterial.envMap = textureCube4;
			   sphereMaterial.needsUpdate = true;
	  },
		Corridor: function () {
				cubeMesh.material = cubeMaterial;
				cubeMesh.visible = true;
				sphereMaterial.envMap = textureCube5;
				sphereMaterial.needsUpdate = true;
	  },
	  Garden1: function () {
			  cubeMesh.material = cubeMaterial;
			  cubeMesh.visible = true;
			  sphereMaterial.envMap = textureCube6;
			  sphereMaterial.needsUpdate = true;
	  },
		Garden2: function () {
			 cubeMesh.material = cubeMaterial;
			 cubeMesh.visible = true;
			 sphereMaterial.envMap = textureCube7;
			 sphereMaterial.needsUpdate = true;
	  },
  };
  var gui = new dat.GUI();
	gui.add( params, 'Japanese_Garden' );
	gui.add( params, 'Wilkins_Building' );
	gui.add( params, 'Gorden_Square' );
	gui.add( params, 'Temple_Church' );
	gui.add( params, 'Corridor' );
	gui.add( params, 'Garden1' );
	gui.add( params, 'Garden2' );
	gui.open();
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	cameraCube.aspect = window.innerWidth / window.innerHeight;
	cameraCube.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	camera.lookAt( scene.position );
	cameraCube.rotation.copy( camera.rotation );
	renderer.render( sceneCube, cameraCube );
	renderer.render( scene, camera );
}
