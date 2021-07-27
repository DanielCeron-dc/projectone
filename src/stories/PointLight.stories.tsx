import React from 'react';
import Plane from "../Components/ThreeJs/Plane";
import BackGround from '../Components/ThreeJs/BackGround/BackGround';
import { Meta, Story } from "@storybook/react";
import Box from '../Components/ThreeJs/Box/Box';
import PointLight, { PointLightProps } from '../Components/ThreeJs/PointLight';
import Dragable from '../Components/ThreeJs/Controls/Dragable';

const PointLightStory: React.FC<PointLightProps> = (props) => {
    return <BackGround>
        <Dragable>
            <PointLight position={[0, 3, 0]} {...props} />
        </Dragable>
        <Box position={[4, 1, 0]} roughness={0} />
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

