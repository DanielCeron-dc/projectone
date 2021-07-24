import React from 'react';
import Line from "../Components/ThreeJs/Line";
import BackGround from '../Components/ThreeJs/BackGround/BackGround';
import { ComponentMeta } from "@storybook/react";

const LineStory: React.FC = () => {
    return <BackGround>
        <Line />
    </BackGround>
}

export default {
    title: 'react-three-fiber | Line',
    component: LineStory,
} as ComponentMeta<typeof LineStory>;

export const line = () => <LineStory />

