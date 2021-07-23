import { MeshProps } from '@react-three/fiber';
import React from 'react';


export interface PlaneProps {
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


const Plane: React.FC<PlaneProps> = (props) => {
    return <mesh position={props.position} receiveShadow>
        <boxBufferGeometry args={[props.width ?? 1000, props.height, props.depth ?? 1000]} />
        <meshPhysicalMaterial
            color={props.color ?? 'grey'}
            opacity={props.opacity}
            transparent={props.transparent}
            metalness={props.metalness}
            roughness={props.roughness}
        />
    </mesh>
}


export default Plane;