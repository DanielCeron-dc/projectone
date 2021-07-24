import React, { useMemo } from 'react';

type LineProps = {

};

const Line: React.FC<LineProps> = () => {


    const vertices: Float32Array = useMemo(() => {
        return new Float32Array([
            -1, -1, 0,
            1, -1, 0,
            1, 1, 0,
        ]);
    }
        , []);

    return <line>
        <bufferGeometry attach={"geometry"}>
            <bufferAttribute attachObject={['attributes', 'position']} array={vertices} count={vertices.length / 3} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="red" />
    </line>
}
export default Line;