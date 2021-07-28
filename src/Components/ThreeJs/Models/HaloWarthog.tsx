import React, { Suspense } from 'react';
import Model from "./Model";



const HaloWarthog: React.FC = () => {

    return <Suspense fallback={null} >
        <Model
            filePath="./Halo_Warthog/scene.gltf"
            object
            scale={[1, 1, 1]}
        />
    </Suspense>


}
export default HaloWarthog;