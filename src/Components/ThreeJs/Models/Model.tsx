import React from 'react';
import { PrimitiveProps, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



interface ModelProps extends PrimitiveProps {
    filePath: string;
}


const Model: React.FC<ModelProps> = (props) => {

    const model = useLoader(GLTFLoader, props.filePath);

    return <primitive {...props} object={model.scene} />

}
export default Model;