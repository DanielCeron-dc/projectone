
import { Meta, Story } from "@storybook/react";
import HaloWarthog from "../Components/ThreeJs/Models/HaloWarthog";
import BackGround from "../Components/ThreeJs/BackGround/BackGround";
import Plane from "../Components/ThreeJs/Plane";
import PointLight from "../Components/ThreeJs/PointLight";
import Halo from "../Components/ThreeJs/Models/Halo";


const HaloWarthogStories = () => <BackGround>
    <PointLight position={[0, 2, 2]} />
    <HaloWarthog />
    <Halo />
    <Plane />
</BackGround>


export default {

    title: "react-three-fiber | Models",
    component: HaloWarthogStories,

} as Meta<typeof HaloWarthogStories>

export const haloWarthog: Story = () => <HaloWarthogStories />;

