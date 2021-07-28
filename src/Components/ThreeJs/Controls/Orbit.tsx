
import React, { useEffect, useRef } from 'react';
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


let isOninteracion = false;
/** 
    this a component that wraps the three.js orbitControls, 
    this component allow you to control the camera with the mouse
**/
const Orbit: React.FC = () => {
    const { camera, gl } = useThree();
    const { isOrbitControlsEnabled } = useControlsStore();
    const orbitRef = useRef<OrbitControls>();

    useEffect(() => {
        orbitRef.current?.addEventListener('start', () => {
            isOninteracion = true;
        }
        );
        orbitRef.current?.addEventListener('end', () => {
            isOninteracion = false;
        })
    }, []);

    return <orbitControls
        ref={orbitRef}
        attach="orbitControls"
        args={[camera, gl.domElement]}
        enableKeys
        enabled={isOninteracion ? true : isOrbitControlsEnabled} />
}
export default Orbit;



