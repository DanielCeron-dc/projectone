import React, { Suspense, useContext } from 'react';
import BoxWithTexture from '../ThreeJs/Box/BoxWithTexture';
import { StateContext } from "../../State/Context";

type BoxesProps = {

};

const Boxes: React.FC<BoxesProps> = () => {
    const { boxSelected, changeBoxSelected } = useContext(StateContext);
    return <>
        <Box2 selected={boxSelected === 1} onClick={() => changeBoxSelected(1)} />
        <Box2 selected={boxSelected === 2} onClick={() => changeBoxSelected(2)} />
        <Box2 selected={boxSelected === 3} onClick={() => changeBoxSelected(3)} />
        <Box2 selected={boxSelected === 4} onClick={() => changeBoxSelected(4)} />
        <Box2 selected={boxSelected === 5} onClick={() => changeBoxSelected(5)} />
    </>
}


const Box2: React.FC<{ selected: boolean, onClick: () => void }> = (props) => {

    return <Suspense fallback={null}>
        <BoxWithTexture
            height={props.selected ? 10 : 5}
            width={props.selected ? 10 : 5}
            depth={props.selected ? 10 : 5}
            position={[Math.random() * 100 - 50, 0, Math.random() * 100 - 50]}

        />
    </Suspense>
}

export default Boxes;