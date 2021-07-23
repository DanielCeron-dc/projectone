import React from 'react';
import Face, { FaceProps } from "../Components/Face"
import BackGround from '../Components/BackGround/BackGround';
import { Story, Meta } from '@storybook/react';

const FaceStory: React.FC<FaceProps> = (props) => {
    return <BackGround>
        <Face {...props} />
    </BackGround>
}

export default {
    title: 'react-three-fiber | Face',
    component: FaceStory,
    argTypes: {
        color: { control: 'color' },
    }
} as Meta<typeof FaceStory>;

export const face: Story<FaceProps> = (args) => <FaceStory {...args} />

