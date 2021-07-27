import React from "react";
import { Meta, Story } from "@storybook/react";
import BackGround from "../Components/ThreeJs/BackGround/BackGround";
import Text, { TextProps } from "../Components/ThreeJs/Text/Text";
import SpriteText from "../Components/ThreeJs/Text/SpriteText";


const TextStories: React.FC<TextProps> = (props) => {
    return <BackGround>
        <Text {...props} />
    </BackGround>
}

const SpriteTextStories: React.FC = () => {
    return <BackGround axeshelper>
        <SpriteText position={[0, 0, 10]} fontSize={100}>
            typescript
        </SpriteText>
        <SpriteText position={[10, 0, 0]} fontSize={100}>
            React
        </SpriteText>
        <SpriteText position={[-10, 0, 0]} fontSize={100}>
            Flutter
        </SpriteText>
        <SpriteText position={[0, 0, -10]} fontSize={100}>
            C#
        </SpriteText>
        <SpriteText position={[5, 5, -5]} fontSize={100}>
            [ 5  5  -5 ]
        </SpriteText>
        <SpriteText position={[5, -5, 5]} fontSize={100}>
            [ 5  -5  5 ]
        </SpriteText>
        <SpriteText position={[-5, 5, 5]} fontSize={100}>
            [ -5  5  5 ]
        </SpriteText>
        <SpriteText position={[-5, -5, -5]} fontSize={100}>
            [ -5  -5  -5 ]
        </SpriteText>
        <SpriteText position={[-5, 5, -5]} fontSize={100}>
            [ -5  5  -5 ]
        </SpriteText>
        <SpriteText position={[5, -5, -5]} fontSize={100}>
            [ 5  -5  -5 ]
        </SpriteText>
        <SpriteText position={[5, 5, 5]} fontSize={100}>
            [ 5  5  5 ]
        </SpriteText>
        <SpriteText position={[-5, -5, 5]} fontSize={100}>
            [ -5  -5  5 ]
        </SpriteText>

    </BackGround>
}



export default {
    title: "Components|Text",
    component: TextStories,
    argTypes: {
        children: { type: "string", optional: false, defaultValue: "typescript" },
        color: { type: "string", optional: true, defaultValue: "white" },
        fontSize: { type: "number", optional: true, defaultValue: 1 },
        depth: { type: "number", optional: true, defaultValue: 0.2 },
        position: { control: 'array', defaultValue: [0, 0, 0], },
        scale: { control: 'array', defaultValue: [1, 1, 1], }
    },
} as Meta<typeof TextStories>


export const text: Story<TextProps> = args => <TextStories  {...args} />

export const spritetext = () => <SpriteTextStories />



