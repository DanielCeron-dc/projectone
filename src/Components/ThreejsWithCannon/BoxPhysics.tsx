import React, { useEffect } from "react";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { usePhysicsBoxesStore } from "../../state/PhysicsBoxesStore";
import { Vector3 } from "three";

interface BoxPhysicsProps {
    id: number;
}

const BoxPhysics: React.FC<BoxPhysicsProps> = (props) => {

    let position: [number, number, number] = [0, 0, 0];
    let doesItStartedDragging = false;
    let isDragging = false;
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, props.id + 3, 0] }));

    useEffect(() => {
        usePhysicsBoxesStore.subscribe((newPosition: [number, number, number]) => {
            position = newPosition;
            isDragging = true;
        }, (state) => state.positions[props.id]);
        usePhysicsBoxesStore.subscribe((value: boolean) => {
            doesItStartedDragging = value;
            console.log(doesItStartedDragging);

        }, (state) => state.dragging[props.id]);
    }, []);

    useFrame(() => {
        if (doesItStartedDragging) {
            api.mass?.set(0);
        } else {
            api.mass?.set(1);
        }
        if (isDragging) {
            api.position?.copy(new Vector3(position[0], position[1], position[2]));
            isDragging = false;
        }
    });

    return <mesh ref={ref}  >
        <boxBufferGeometry />
        <meshPhysicalMaterial color="red" />
    </mesh>
}

export default React.memo(BoxPhysics);



