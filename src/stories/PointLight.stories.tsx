import React from 'react';
import Plane from "../Components/Plane";
import BackGround from '../Components/BackGround/BackGround';
import { Meta, Story } from "@storybook/react";
import Box from '../Components/Box';
import PointLight, { PointLightProps } from '../Components/PointLight';

const PointLightStory: React.FC<PointLightProps> = (props) => {
    return <BackGround>
        <PointLight position={[0, 3, 0]} {...props} />
        <Box position={[4, 1, 0]} />
        <Plane position={[0, -1, 0]} />
    </BackGround>
}

export default {
    title: 'react-three-fiber | PointLight',
    component: PointLightStory,
    argTypes: {
        colorHexadecimal: { control: 'color' },
        intensity: { control: 'number', defaultValue: 1 }
    }
} as Meta<typeof PointLightStory>;

export const pointlight: Story<PointLightProps> = (args) => <PointLightStory {...args} />

