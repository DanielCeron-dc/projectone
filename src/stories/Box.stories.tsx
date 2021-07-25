import React from 'react';
import Box, { BoxProps } from "../Components/ThreeJs/Box/Box";
import BackGround from '../Components/ThreeJs/BackGround/BackGround';
import { Meta, Story } from "@storybook/react";
import PointLight from '../Components/ThreeJs/PointLight';
import BoxWithTexture, { BoxWithTextureProps } from '../Components/ThreeJs/Box/BoxWithTexture';
import Boxes from '../Components/ThreeJs/Box/Boxes';
import StarBox from '../Components/ThreeJs/Box/StarBox';


const BoxStory: React.FC<BoxProps> = (props) => {
    return <BackGround axeshelper ambientLightIntensity={1}>
        {props.metalness && props.metalness > 0 ? <PointLight position={[2, 3, 0]} intensity={1} /> : <></>}
        {props.roughness && props.roughness === 0 ? <PointLight position={[2, 3, 0]} intensity={1} /> : <></>}
        <Box  {...props} />
    </BackGround>
}

const BoxWithTextureStory: React.FC<BoxWithTextureProps> = (props) => {

    return <BackGround axeshelper ambientLightIntensity={1}>
        <BoxWithTexture {...props} />
    </BackGround>

}

const BoxesStory: React.FC<{}> = () => {
    return <BackGround axeshelper ambientLightIntensity={1}>
        <Boxes />
    </BackGround>
}


const StarBoxStory: React.FC<{}> = () => {
    return <BackGround axeshelper ambientLightIntensity={1}>
        <PointLight position={[2, 1, 0]} intensity={5} />
        <PointLight position={[-2, -1, 0]} intensity={5} />
        <StarBox />
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

export const boxWithTexture: Story<BoxWithTextureProps> = (props) => <BoxWithTextureStory {...props} />

export const boxes: Story = () => <BoxesStory />

export const starBox: Story = () => <StarBoxStory />

