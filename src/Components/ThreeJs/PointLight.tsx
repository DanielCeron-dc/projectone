import { MeshProps } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';





export interface PointLightProps {

    position?: [number, number, number];
    colorHexadecimal?: string;
    intensity?: number;
}

const PointLight: React.FC<PointLightProps> = (props) => {

    const color = new THREE.Color(props.colorHexadecimal);

    return <mesh position={props.position}>
        <sphereBufferGeometry args={[0.2]} />
        <meshPhongMaterial emissive={color} />
        <pointLight castShadow color={props.colorHexadecimal} intensity={props.intensity} />
    </mesh>
}
export default PointLight;