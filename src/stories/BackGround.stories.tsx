import React from 'react';
import Plane from "../Components/Plane";
import BackGround, { BackGroundProps } from '../Components/BackGround/BackGround';
import { Meta, Story } from "@storybook/react";



const BackGroundStory: React.FC<BackGroundProps> = (props) => {
    return <BackGround {...props}>
        <Plane position={[0, -1, 0]} />
    </BackGround>
}

export default {
    title: 'react-three-fiber | BackGround',
    component: BackGroundStory,
    argTypes: {
        cameraPosition: { control: 'array', defaultValue: [0, 0, 10], },
        backGroundColor: { control: 'color' },
        ambientLightIntensity: { control: 'number', defaultValue: 0.5 },
        axeshelper: { control: 'boolean' }
    }
} as Meta<typeof BackGroundStory>;

export const backGround: Story<BackGroundProps> = (args) => <BackGroundStory {...args} />