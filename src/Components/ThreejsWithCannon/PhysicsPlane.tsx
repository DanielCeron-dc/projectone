import React from 'react';
import { useBox } from "@react-three/cannon";


const PhysicsPlane: React.FC = () => {

    const [ref] = useBox(() => ({ args: [100, 1, 100], position: [0, -1, 0] }));

    return <mesh ref={ref}>
        <boxBufferGeometry args={[100, 1, 100]} />
        <meshBasicMaterial />
    </mesh>
}
export default PhysicsPlane;