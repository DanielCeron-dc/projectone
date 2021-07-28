import React, { useEffect, useState, useRef } from 'react';
import { useThree, extend, ReactThreeFiber } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { Group, Object3D } from 'three';


import { useControlsStore } from '../../../state/ControlsStore';
import { usePhysicsBoxesStore } from "../../../state/PhysicsBoxesStore";

extend({ DragControls });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            dragControls: ReactThreeFiber.Object3DNode<DragControls, typeof DragControls>
        }
    }
}

const Dragable: React.FC<{ id?: number }> = (props) => {

    const { camera, gl } = useThree();
    const [children, setChildren] = useState<Object3D[]>([]);
    const groupRef = useRef<Group>();
    const controlRef = useRef<DragControls>();
    const { setIsOrbitControlsEnabled } = useControlsStore();

    const { setDragging, setPosition } = usePhysicsBoxesStore();


    useEffect(() => {
        setChildren(groupRef.current?.children ?? []);
    }, []);

    useEffect(() => {
        const currentControls = controlRef.current;
        if (!currentControls) return;
        currentControls.addEventListener("hoveron", () => {
            setIsOrbitControlsEnabled(false);
        });
        currentControls.addEventListener("hoveroff", () => {
            setIsOrbitControlsEnabled(true);
        });
        currentControls.addEventListener("dragstart", () => {
            props.id !== undefined && setDragging(props.id, true);
        });
        currentControls.addEventListener("dragend", () => {
            props.id !== undefined && setDragging(props.id, false);
        });
        currentControls.addEventListener("drag", (e) => {
            if (e.object.position.y < 0) {
                e.object.position.y = 0;
            }; // prevent y-axis from going under ground
            props.id !== undefined && setPosition(props.id, [e.object.position.x, e.object.position.y, e.object.position.z]);
        });


    }, [children]);

    return <group ref={groupRef} >
        <dragControls ref={controlRef} args={[children, camera, gl.domElement]} />
        {props.children}
    </group>
}
export default Dragable;