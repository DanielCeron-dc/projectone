import React from 'react';
import Box, { BoxProps } from "../Components/Box";
import BackGround from '../Components/BackGround/BackGround';
import { Meta, Story } from "@storybook/react";
import PointLight from '../Components/PointLight';

const BoxStory: React.FC<BoxProps> = (props) => {
    return <BackGround axeshelper ambientLightIntensity={1}>
        {props.metalness && props.metalness > 0 ? <PointLight position={[2, 3, 0]} intensity={1} /> : <></>}
        {props.roughness && props.roughness === 0 ? <PointLight position={[2, 3, 0]} intensity={1} /> : <></>}
        <Box  {...props} />
    </BackGround>
}

export default {
    title: 'react-three-fiber | BOX',
    component: BoxStory,
    argTypes: {
        color: { control: 'color', defaultValue: '#ff0000' },
        width: { control: 'number', defaultValue: 1 },
        height: { control: 'number', defaultValue: 1 },
        depth: { control: 'number', defaultValue: 1 },
        transparent: { control: 'boolean' },
        opacity: { control: 'number' },
        metalness: { control: 'number' },
        roughness: { control: 'number', defaultValue: 1 },
        position: { control: 'array', defaultValue: [0, 0, 0], }
    }
} as Meta<typeof BoxStory>;

export const box: Story<BoxProps> = (props) => <BoxStory  {...props} />

