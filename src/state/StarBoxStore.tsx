import create from "zustand";


interface IStarBox {
    boxes: number[];
    coords: number[][];
    turn: () => void;
}

const numberOfItems = 50
const ids: number[] = new Array(numberOfItems).fill(0).map((_, i) => i)

export const useStarBoxStore = create<IStarBox>((set) => ({
    // each box carries a unique id
    boxes: ids,
    // each box carries rotation coordinates
    coords: ids.reduce(
        (acc, id) => ([
            ...acc,
            [id] = [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
        ]),
        [] as number[][]
    ),
    // the turn() function increases x/y/z rotation of each box by 0.01 radian
    // it mutates ALL boxes, so this will also affect all connected components, which quickly escalates
    turn: () => {
        set((state) => {
            const coords = []
            for (let i = 0; i < state.boxes.length; i++) {
                const id = state.boxes[i]
                const [x, y, z] = state.coords[id]
                coords[id] = [x + 0.01, y + 0.01, z + 0.01]
            }
            return { ...state, coords }
        });
    }
}))