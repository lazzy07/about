import React, { useEffect, createRef } from 'react'
import { Color, Fog, PerspectiveCamera, PMREMGenerator, Scene, sRGBEncoding, UnsignedByteType, WebGLRenderer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { defaultColors } from '../constants/Colors';
import LaptopModel from "../models/laptop.glb";
import hdri from "../hdri/phone_shop_1k.hdr";

let renderer = new WebGLRenderer({ antialias: true });
const scene = new Scene();
const camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 5000);

export default function LaptopLayer() {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    camera.position.set(0, 0, 250);

    //Creating scene
    scene.background = new Color().set(defaultColors.DEFAULT_FONT_COLOR);
    scene.fog = new Fog(scene.background, 1, 5000);

    const loader = new GLTFLoader();

    loader.load(LaptopModel, function (gltf) {
      const mesh = gltf.scene.children[0];
      const s = 0.65;
      mesh.scale.set(s, s, s);
      mesh.position.y = -65;
      // mesh.rotation.y = - 1;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
    });

    const dataLoader = new RGBELoader();
    dataLoader.setDataType(UnsignedByteType);

    dataLoader.load(hdri, (data) => {
      const pmremGenerator = new PMREMGenerator(renderer)
      pmremGenerator.compileEquirectangularShader();
      const envMap = pmremGenerator.fromEquirectangular(data).texture;
      scene.environment = envMap;
    })

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.outputEncoding = sRGBEncoding;
    renderer.shadowMap.enabled = true;

    if (ref) {
      ref.current?.appendChild(renderer.domElement);
    }
    animate();
  }, []);

  const animate = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(animate);
    // animate();
  }

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
    </div>
  )
}
