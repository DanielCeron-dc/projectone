import React, { Suspense, useCallback, useEffect } from 'react';
import { useStore } from "../../../state/StarBoxStore";
import Box from './Box';




const StarBox: React.FC = () => {

    const { boxes } = useStore();

    return <>
        {boxes.map((_, index) => {
            return <Box2 id={index} key={index} />
        })}
    </>
}

const Box2: React.FC<{ id: number }> = (props) => {
    let rotationCoords: number[] = [0, 0, 0];
    let turn = useStore(state => state.turn);

    useEffect(() => {
        useStore.subscribe((coors: number[]) => {
            rotationCoords = coors;
        }, (state) => state.coords[props.id])
    }, [])

    const useFrameWithRef = useCallback(
        (ref: React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | undefined>) => {
            turn();
            ref.current?.rotation.set(rotationCoords[0], rotationCoords[1], rotationCoords[2]);
        },
        [],
    )

    return <Suspense fallback={null}>
        <Box useFrameWithRef={useFrameWithRef} />
    </Suspense>
}


export default StarBox;