import React from 'react';
import { useBox } from "@react-three/cannon";



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



    return <mesh receiveShadow position={props.position ?? [0, -1, 0]} >
        <boxBufferGeometry args={[props.width ?? 1000, props.height ?? 1, props.depth ?? 1000]} />
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