
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export interface BoxProps {
    color?: string;
    width?: number;
    height?: number;
    depth?: number;
    transparent?: boolean;
    metalness?: number;
    opacity?: number;
    roughness?: number;
    position?: [number, number, number];
    useFrameWithRef?: (ref: React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | undefined>) => void;
}

const Box = (props: BoxProps) => {
    const meshRef = useRef<THREE.Mesh>();
    useFrame(() => {
        meshRef && props.useFrameWithRef && props.useFrameWithRef(meshRef);
    });
    return <mesh ref={meshRef} position={props.position} castShadow receiveShadow >
        <boxBufferGeometry args={[props.width, props.height, props.depth]} />
        <meshPhysicalMaterial
            color={props.color ?? 'green'}
            opacity={props.opacity}
            transparent={props.transparent}
            metalness={props.metalness}
            roughness={props.roughness}
            attach="material"
        />
    </mesh>
}


export default Box;