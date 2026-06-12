import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { PITCH } from '../sim/types';

/**
 * Dusk "broadcast" scene: warm low sun, floodlights on, bloom for the lights,
 * LED glow and the ball trail.
 */
export class SceneManager {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly sun: THREE.DirectionalLight;
  private composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private smaa: SMAAPass;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.85;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x35455e, 220, 540);

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 700);
    this.camera.position.set(0, 22, 48);
    this.camera.lookAt(0, 0, 10);

    // Dusk sky
    const sky = new Sky();
    sky.scale.setScalar(2000);
    const u = sky.material.uniforms;
    u['turbidity'].value = 4;
    u['rayleigh'].value = 2.2;
    u['mieCoefficient'].value = 0.003;
    u['mieDirectionalG'].value = 0.8;
    const sunPos = new THREE.Vector3();
    const phi = THREE.MathUtils.degToRad(90 - 13); // low evening sun
    const theta = THREE.MathUtils.degToRad(25); // behind the broadcast camera
    sunPos.setFromSphericalCoords(1, phi, theta);
    u['sunPosition'].value.copy(sunPos);
    this.scene.add(sky);

    // Warm low sun (sole shadow caster)
    this.sun = new THREE.DirectionalLight(0xffa860, 2.4);
    this.sun.position.copy(sunPos).multiplyScalar(260);
    this.sun.position.y = Math.max(this.sun.position.y, 60);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.near = 50;
    sc.far = 500;
    sc.left = -90;
    sc.right = 90;
    sc.top = 90;
    sc.bottom = -90;
    this.sun.shadow.bias = -0.0004;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.sun.target.position.set(0, 0, 10);

    // Cool dusk ambient
    const hemi = new THREE.HemisphereLight(0x5577bb, 0x26331f, 0.7);
    this.scene.add(hemi);

    // Floodlights: cool white spots aimed at the square (no shadows for perf)
    const cz = PITCH.length / 2;
    const towerR = PITCH.groundRadius + 28;
    for (const a of [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4]) {
      const spot = new THREE.SpotLight(0xe8f4ff, 900, 320, 0.6, 0.55, 1.6);
      spot.position.set(Math.cos(a) * towerR, 40, cz + Math.sin(a) * towerR);
      spot.target.position.set(0, 0, cz);
      this.scene.add(spot);
      this.scene.add(spot.target);
    }

    // Postprocessing: bloom for lights/LED/trails + SMAA (replaces lost MSAA)
    this.composer = new EffectComposer(this.renderer);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.32,
      0.4,
      0.9,
    );
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.smaa = new SMAAPass(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.smaa);

    window.addEventListener('resize', () => this.onResize());
  }

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setSize(window.innerWidth, window.innerHeight);
  }

  render(): void {
    this.composer.render();
  }
}
