import React, { useRef, useEffect } from "react";
import Editor from "./components/Editor";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import * as THREE from "three";

import { Canvas, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

const SpinningMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.z += 0.0008));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.2}
      />
    </mesh>
  );
};

const TorusMesh = ({ position, args, color, speed, axis }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.z += 0.0008));
  return (
    <mesh position={position} ref={mesh}>
      <torusBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.02}
      />
    </mesh>
  );
};

const CylinderMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.z += 0.0008));
  return (
    <mesh position={position} ref={mesh}>
      <cylinderBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.01}
      />
    </mesh>
  );
};

const ConeMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.0008));
  return (
    <mesh position={position} ref={mesh}>
      <coneBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.5}
      />
    </mesh>
  );
};

const ExtrudeMesh = ({ position, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.z += 0.0002));

  var length = 5,
    width = 5;

  var shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, width);
  shape.lineTo(length, width);
  shape.lineTo(length, 0);
  shape.lineTo(0, 0);

  var extrudeSettings = {
    steps: 2,
    depth: 0,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  return (
    <mesh position={position} ref={mesh}>
      <extrudeBufferGeometry
        attach="geometry"
        args={[shape, extrudeSettings]}
      />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.1}
      />
    </mesh>
  );
};

function App() {
  let background = useRef(null);

  useEffect(() => {
    TweenMax.to(background, 0.8, {
      backgroundColor: "#F86638",
      opacity: 1,
      ease: Power3.easeInOut,
    });
  });

  return (
    <Router>
      <div
        className="App"
        ref={(el) => {
          background = el;
        }}
      >
        <Canvas
          className="geometry"
          colorManagement
          camera={{ position: [-5, 2, 10], fov: 60 }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[0, 10, 0]}
            intensity={0.4} // 0.4
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.2} />
          <pointLight position={[0, -10, 0]} intensity={0.1} />
          {/* <pointLight position={[0, -20, 20]} intensity={0.1} /> */}
          <SpinningMesh
            position={[9, 4, 4]}
            args={[4, 1, 1]}
            color="#F86638"
            speed={1}
          />
          {/* <SpinningMesh position={[-7, 3, 1]} args={[1, 2, 1]} color="lightgreen" speed={2}/> */}
          <SpinningMesh
            position={[10, -9, -2]}
            args={[1, 2, 2]}
            color="#F86638"
            speed={2}
          />
          <TorusMesh
            position={[-12, 7, -60]}
            args={[10, 2, 16, 100]}
            color="#F86638"
            speed={2}
          />
          <TorusMesh
            position={[50, -15, -5]}
            args={[8, 2, 16, 100]}
            color="#F86638"
            speed={1}
          />
          <CylinderMesh
            position={[9, -25, -50]}
            args={[5, 5, 20, 32]}
            color="#F86638"
            speed={1}
          />
          <CylinderMesh
            position={[9, 20, -20]}
            args={[2, 2, 20, 32]}
            color="#F86638"
            speed={1}
          />
          <ConeMesh
            position={[40, 5, -40]}
            args={[10, 8, 200]}
            color="#F86638"
            speed={1}
          />
          <ConeMesh
            position={[-13, -1.5, -8]}
            args={[2, 5, 200]}
            color="#F86638"
            speed={1}
          />
          <ExtrudeMesh position={[-20, -32, -50]} color="#F86638" speed={2} />
          {/* <TubeMesh position={[20, 0, -80]} color="green" speed={2}/> */}
        </Canvas>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/editor" component={Editor} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </div>
    </Router>
  );
}

export default App;
