

import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import React, { useRef } from "react";

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
    useFrameWithRef?: (ref: React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | undefined>) => void;
}

const BoxWithTexture = (props: BoxWithTextureProps) => {

    const texture = useLoader(THREE.TextureLoader, "./wood.jpg");
    const meshRef = useRef<THREE.Mesh>();
    useFrame(() => {
        meshRef && props.useFrameWithRef && props.useFrameWithRef(meshRef);
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


export default React.memo(BoxWithTexture);