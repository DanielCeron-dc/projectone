import { ForwardedRef, forwardRef, useMemo, useRef } from 'react';
import { GroupProps, MeshProps, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextGeometryParameters } from 'three';



export type TextProps = {
    children: string;
    depth?: number;
    fontSize?: number;
    color?: string;
    position?: [number, number, number];
};

const Text = forwardRef((props: TextProps, ref: ForwardedRef<GroupProps>) => {

    const font = useLoader(THREE.FontLoader, "./font.typeface.json");
    const config: TextGeometryParameters = useMemo(
        () => ({ font, size: props.fontSize ?? 1, height: props.depth ?? 0.5 }),
        [font, props.fontSize, props.depth]
    );
    const meshRef = useRef<MeshProps>(null);


    return <group ref={ref} >
        <mesh ref={meshRef} position={props.position}>
            <textGeometry args={[props.children, config]} />
            <meshBasicMaterial color={props.color ?? "blue"} />
        </mesh>
    </group>
})
export default Text;