import create from "zustand";

interface IState {
    boxesNumber: number;
    positions: [number, number, number][];
    dragging: boolean[];
    setPosition: (id: number, positions: [number, number, number]) => void;
    setDragging: (id: number, dragging: boolean) => void;
}

const boxes: number = 3;

export const usePhysicsBoxesStore = create<IState>((set) => ({
    boxesNumber: boxes,
    positions: new Array(boxes).fill([Math.random() * 100, 30, Math.random() * 100]),
    dragging: new Array(boxes).fill(false),
    setPosition: (id: number, newpositions: [number, number, number]) => {
        set((state) => {
            let positionsCopy = [...state.positions];
            positionsCopy[id] = newpositions;
            return { ...state, positions: positionsCopy } as IState;
        });
    },
    setDragging: (id: number, dragging: boolean) => {
        set((state) => {

            let dragginCopy: boolean[] = [...state.dragging];
            dragginCopy[id] = dragging;
            return { ...state, dragging: dragginCopy } as IState;
        });
    }
}));
