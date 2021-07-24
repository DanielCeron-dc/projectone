
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three';

export interface BoxWithTextureProps {

    width?: number;
    height?: number;
    depth?: number;
    transparent?: boolean;
    metalness?: number;
    opacity?: number;
    roughness?: number;
    position?: [number, number, number];
    onClick?: () => void;
}

const BoxWithTexture = (props: BoxWithTextureProps) => {
    const meshRef = useRef<THREE.Mesh>();
    const texture = useLoader(THREE.TextureLoader, "./wood.jpg");

    useFrame((state) => {
        meshRef.current?.rotation.set(meshRef.current.rotation.x + 0.01, meshRef.current.rotation.y + 0.01, 0)
    });
    return <mesh ref={meshRef} position={props.position} castShadow receiveShadow onClick={props.onClick}>
        <boxBufferGeometry args={[props.width, props.height, props.depth]} />
        <meshPhysicalMaterial

            opacity={props.opacity}
            transparent={props.transparent}
            map={texture}

        />
    </mesh>
}


export default BoxWithTexture;