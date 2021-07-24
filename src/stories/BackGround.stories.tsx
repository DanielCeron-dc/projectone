import React, { Suspense } from 'react';
import Plane from "../Components/Plane";
import BackGround, { BackGroundProps } from '../Components/BackGround/BackGround';
import { Meta, Story } from "@storybook/react";
import BackGroundTexture from '../Components/BackGround/BackGroundTexture';
import Box from '../Components/Box';



const BackGroundStory: React.FC<BackGroundProps> = (props) => {
    return <BackGround {...props}>
        <Box position={[3, 1, 0]} />
        <Plane position={[0, -1, 0]} width={10} depth={10} />
    </BackGround>
}

const BackGroundWithtexture: React.FC<BackGroundProps> = (props) => {
    return <BackGround {...props}>
        <Suspense fallback={null}>
            <BackGroundTexture />
        </Suspense>

        <Box position={[3, 1, 0]} />
        <Plane position={[0, -1, 0]} width={10} depth={10} />
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

export const backGroundWithTexture: Story<BackGroundProps> = (args) => <BackGroundWithtexture {...args} />