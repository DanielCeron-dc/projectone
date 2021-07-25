import create from "zustand";
import { Box2 } from "../Components/ThreeJs/Box/Boxes";


interface BoxState {
    boxes: typeof Box2[];
    boxSelected: number;
    selectBox: (boxId: number) => void;

}

export const useBoxStore = create<BoxState>((set) => ({
    boxes: [],
    boxSelected: -1,
    selectBox: (boxId) => {
        set({ boxSelected: boxId });
    }
}));
