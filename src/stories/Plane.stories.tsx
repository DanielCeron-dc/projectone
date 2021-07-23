import React from 'react';
import Plane, { PlaneProps } from "../Components/Plane";
import BackGround from '../Components/BackGround/BackGround';
import { Meta, Story } from "@storybook/react";
import PointLight from '../Components/PointLight';

const PlaneStory: React.FC<PlaneProps> = (props) => {
    return <BackGround>
        <PointLight intensity={1} position={[3, 1, 0]} />
        <Plane {...props} />
    </BackGround>
}

export default {
    title: 'react-three-fiber | Plane',
    component: PlaneStory,
    argTypes: {
        color: { control: 'color', defaultValue: '#ff0000' },
        width: { control: 'number', defaultValue: 1000 },
        height: { control: 'number', defaultValue: 1 },
        depth: { control: 'number', defaultValue: 1000 },
        transparent: { control: 'boolean' },
        opacity: { control: 'number' },
        metalness: { control: 'number' },
        roughness: { control: 'number', defaultValue: 0 },
        position: { control: 'array', defaultValue: [0, -1, 0], }
    }
} as Meta<typeof PlaneStory>;

export const plane: Story<PlaneProps> = (props) => <PlaneStory  {...props} />

