import React, { useReducer } from 'react';
import { StateContext } from "./Context";
import Reducer, { initialState } from "./Reducer";

const Provider: React.FC = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    const changeBoxSelected = (boxId: number) => {

        console.log(boxId);

        dispatch({
            type: "CHANGE_SELECTED",
            payload: boxId
        });
    }

    return <StateContext.Provider value={{ boxSelected: state.selected, changeBoxSelected }} />;
}
export default Provider;