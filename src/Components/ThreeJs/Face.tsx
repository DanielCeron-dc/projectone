import React, { useMemo } from 'react';
import * as THREE from 'three';



export type FaceProps = {
    color?: string,
};

const Face: React.FC<FaceProps> = (props) => {


    const vertices: Float32Array = useMemo(() => {
        return new Float32Array([
            -1, -1, 0,
            1, -1, 0,
            1, 1, 0,
        ]);
    }
        , []);

    return <mesh>
        <bufferGeometry attach={"geometry"}>
            <bufferAttribute attachObject={['attributes', 'position']} array={vertices} count={vertices.length / 3} itemSize={3} />
        </bufferGeometry>
        <meshBasicMaterial color={props.color ?? 'orange'} side={THREE.DoubleSide} />
    </mesh>
}
export default Face;