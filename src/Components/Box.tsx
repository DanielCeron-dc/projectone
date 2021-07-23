
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
}

const Box = (props: BoxProps) => {
    const meshRef = useRef<THREE.Mesh>();
    useFrame((state) => {
        meshRef.current?.rotation.set(meshRef.current.rotation.x + 0.01, meshRef.current.rotation.y + 0.01, 0)
    });
    return <mesh ref={meshRef} position={props.position} castShadow receiveShadow >
        <boxBufferGeometry args={[props.width, props.height, props.depth]} />
        <meshPhysicalMaterial
            color={props.color ?? 'green'}
            opacity={props.opacity}
            transparent={props.transparent}
            metalness={props.metalness}
            roughness={props.roughness}
        />
    </mesh>
}


export default Box;