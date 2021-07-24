import { createContext } from "react";
export interface IStateContextProps {
    boxSelected: number;
    changeBoxSelected: (boxSelected: number) => void;
}
export const StateContext = createContext<IStateContextProps>({ boxSelected: 0, changeBoxSelected: () => { } })
