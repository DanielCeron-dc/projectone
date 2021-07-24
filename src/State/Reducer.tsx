
interface IState {
    selected: number;
}

type IAction = { type: "CHANGE_SELECTED", payload: number }


export const initialState: IState = {
    selected: 0
}

const reducer = (state: IState, { type, payload }: IAction): IState => {
    switch (type) {
        case "CHANGE_SELECTED":
            return { ...state, selected: payload }
        default:
            return state
    }
}


export default reducer;