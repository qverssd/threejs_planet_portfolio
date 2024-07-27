import React, { Suspence } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgURL]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.5]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                color='ff8eb'
                polygonOffset
                polygonOffsetFactor={-5}
                flatShading 
                />
                <Decal
                position={[0, 0, 1]}
                rotation={[2 * Math.PI, 0, 6.25]}
                scale={1}
                map={decal}
                flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}>
            <Suspence fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgURL={icon} />
            </Suspence>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;