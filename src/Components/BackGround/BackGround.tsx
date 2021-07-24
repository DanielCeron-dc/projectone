import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Orbit from './Orbit';



export type BackGroundProps = {
    cameraPosition?: [number, number, number],
    backGroundColor?: string,
    axeshelper?: boolean,
    ambientLightIntensity?: number,
};


/** 
 * This is the BackGround component with a 3D canvas, it is a simple container for 3D objects. 
 * it has a 3d camera and a 3d scene.
**/
const BackGround: React.FC<BackGroundProps> = (props) => {
    return <div style={{ height: '100vh', width: '100vw' }}>
        <Suspense fallback={null}>
            <Canvas
                style={{ background: props.backGroundColor ?? 'black' }}
                shadows
                camera={{ position: props.cameraPosition }}
            >
                {props.children}
                {props.axeshelper && <axesHelper args={[10]} />}
                <Orbit />
                <ambientLight intensity={props.ambientLightIntensity ?? 0.2} />
            </Canvas>
        </Suspense>

    </div>
}


export default BackGround;