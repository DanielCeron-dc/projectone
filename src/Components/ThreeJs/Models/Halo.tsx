import React from 'react';
import Model from './Model';


const Halo: React.FC = () => {

    return <Model filePath="./halo/scene.gltf" object position={[2, 2, 0]} scale={[0.001, 0.001, 0.001]} />
}
export default Halo;