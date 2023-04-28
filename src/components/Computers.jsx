import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from './Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./cube_bright/scene.gltf');
  const [rotation, setRotation] = useState([90, 0, 90]);
  useEffect(() => {
    const rotationSpeed = 0.017;

    const interval = setInterval(() => {
      setRotation([rotation[0], rotation[1] + rotationSpeed, rotation[2]]);
    }, 10);

    return () => clearInterval(interval);
  }, [rotation]);
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[0, 35, 0]}
        angle={0.18}
        penumbra={1}
        intensity={9}
        castShadow
        shadow-mapSize={4096}
      />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.036 : 0.5}
        position={isMobile ? [0, 0, 0] : [0, -3.25, -1.5]}
        rotation={rotation}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        onPointerMove={(e) => {
          e.stopPropagation();
          if (e.buttons === 1) {
            const deltaX = e.movementX;
            const deltaY = e.movementY;
            setRotation([
              rotation[0] - deltaY * 0.01,
              rotation[1] - deltaX * 0.01,
              rotation[2],
            ]);
          }
        }}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia('(max-width: 500px)');

  //   // Set the initial value of the `isMobile` state variable
  //   setIsMobile(mediaQuery.matches);

  //   // Define a callback function to handle changes to the media query
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   // Add the callback function as a listener for changes to the media query
  //   mediaQuery.addEventListener('change', handleMediaQueryChange);

  //   // Remove the listener when the component is unmounted
  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1.5, 2]}
      camera={{ position: [10, 0, -10], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={true} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
