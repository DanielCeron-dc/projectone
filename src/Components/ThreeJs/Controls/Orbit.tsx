
import React from 'react';
import { extend, ReactThreeFiber, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useControlsStore } from '../../../state/ControlsStore';

extend({ OrbitControls })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}

/** 
    this a component that wraps the three.js orbitControls, 
    this component allow you to control the camera with the mouse
**/
const Orbit: React.FC = () => {
    const { camera, gl } = useThree();
    const { isOrbitControlsEnabled } = useControlsStore();
    return <orbitControls attach="orbitControls" args={[camera, gl.domElement]} enableKeys enabled={isOrbitControlsEnabled} />
}
export default Orbit;



