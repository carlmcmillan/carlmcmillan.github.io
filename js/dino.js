var dino = {

  _container: document.querySelector("#dino"),
  _renderer: null,
  _camera: null,
  _scene: null,
  _frameId: null,

  run: function() {
    this._renderer = new THREE.WebGLRenderer({antialias:true});
    var renderer = this._renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    this._container.appendChild(renderer.domElement);

    this._camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 2000);
    var camera = this._camera;
    camera.position.y = 50;
    camera.position.z = 200;

    this._scene = new THREE.Scene();
    var scene = this._scene;

    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    var directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0, 0, 1).normalize();
    scene.add(directionalLight);

    var onProgress = function(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded/xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
      }
    };

    var onError = function(xhr) {};

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    var loader = new THREE.OBJMTLLoader();
    loader.load('assets/Raptor.obj', 'assets/Raptor.mtl', function(object) {
      object.rotation.y = Math.PI/4;
      object.position.y = -50;
      scene.add(object);
    }, onProgress, onError);

    var that = this;
    function animate() {
      that._frameId = requestAnimationFrame(animate);
      render();
    }

    function render() {
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    animate();
  },

  stop: function() {
    if (this._renderer != null) {
      this._renderer = null;
      this._scene = null;
      this._camera = null;
      cancelAnimationFrame(this._frameId);
      empty(this._container);
    }

    function empty(elem) {
      while (elem.lastChild) elem.removeChild(elem.lastChild);
    }
  }

}