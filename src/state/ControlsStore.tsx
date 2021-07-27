import create from "zustand";

interface IControlsState {
    isOrbitControlsEnabled: boolean;
    setIsOrbitControlsEnabled: (isOrbitControlsEnabled: boolean) => void;
}

export const useControlsStore = create<IControlsState>((set) => ({
    isOrbitControlsEnabled: true,
    setIsOrbitControlsEnabled: (value: boolean) => {
        set({ isOrbitControlsEnabled: value });
    }
}))


