import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import * as THREE from 'three'

const Computers = ({ isMobile }) => {
  const model = useGLTF("./desktop_pc/scene.gltf");
  // const model  = useGLTF("./buster_drone/scene.gltf");
  let mixer
  // if (model.animations.length) {
  //     mixer = new THREE.AnimationMixer(model.scene);
  //     model.animations.forEach(clip => {
  //         const action = mixer.clipAction(clip)
  //         action.play();
  //     });
  // }
//   useFrame((state, delta) => {
//     mixer?.update(delta)
// })
// model.scene.traverse(child => {
//   if (child.isMesh) {
//       child.castShadow = true
//       child.receiveShadow = true
//       // child.material.side = THREE.FrontSide
//   }
// })


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -2.5 , -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers  isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    
  );
};

export default ComputersCanvas;
