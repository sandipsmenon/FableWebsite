import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

export class SceneManager {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly sun: THREE.DirectionalLight;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.8;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xbcd5e8, 180, 420);

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 600);
    this.camera.position.set(0, 22, 48);
    this.camera.lookAt(0, 0, 10);

    // Sky
    const sky = new Sky();
    sky.scale.setScalar(2000);
    const skyUniforms = sky.material.uniforms;
    skyUniforms['turbidity'].value = 6;
    skyUniforms['rayleigh'].value = 1.8;
    skyUniforms['mieCoefficient'].value = 0.004;
    skyUniforms['mieDirectionalG'].value = 0.8;
    const sunPos = new THREE.Vector3();
    const elevation = 32; // late-afternoon sun
    const azimuth = 140;
    const phi = THREE.MathUtils.degToRad(90 - elevation);
    const theta = THREE.MathUtils.degToRad(azimuth);
    sunPos.setFromSphericalCoords(1, phi, theta);
    skyUniforms['sunPosition'].value.copy(sunPos);
    this.scene.add(sky);

    // Sun light with crisp shadows over the square
    this.sun = new THREE.DirectionalLight(0xfff2dd, 3.2);
    this.sun.position.copy(sunPos).multiplyScalar(220);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.near = 50;
    sc.far = 450;
    sc.left = -90;
    sc.right = 90;
    sc.top = 90;
    sc.bottom = -90;
    this.sun.shadow.bias = -0.0004;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.sun.target.position.set(0, 0, 10);

    const hemi = new THREE.HemisphereLight(0xcfe5ff, 0x3e5d2e, 0.85);
    this.scene.add(hemi);

    window.addEventListener('resize', () => this.onResize());
  }

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
