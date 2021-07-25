import React, { Suspense, useCallback, useEffect } from 'react';
import BoxWithTexture from './BoxWithTexture';
import { useBoxStore } from "../../../state/BoxStore";


type BoxesProps = {

};

const Boxes: React.FC<BoxesProps> = () => {

    return <>
        <Box2 id={1} />
        <Box2 id={2} />
        <Box2 id={3} />
        <Box2 id={4} />
        <Box2 id={5} />
    </>
}

export const Box2: React.FC<{ id: number }> = (props) => {

    let boxSelected: number = -1;
    const setBox = useBoxStore(state => state.selectBox);

    useEffect(() => {
        useBoxStore.subscribe((value: number) => {
            boxSelected = value;
        }, (state) => {
            return state.boxSelected;
        });
    }, []);

    const useFrameWithRef = useCallback(
        (ref: React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | undefined>) => {
            if (props.id === boxSelected) {
                ref.current?.scale.set(0.1, 0.1, 0.1);
            } else {
                ref.current?.scale.set(1, 1, 1);
            }
        }, []);

    const onClick = useCallback(() => {
        setBox(props.id);
    }, []);

    return <Suspense fallback={null}>
        <BoxWithTexture
            useFrameWithRef={useFrameWithRef}
            onClick={onClick}
            position={[Math.random() * 10, 2, Math.random() * 10]}
        />
    </Suspense>
}

export default Boxes;