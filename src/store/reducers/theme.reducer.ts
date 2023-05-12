import {ACTION_DARK, ACTION_LIGHT, ACTION_SET} from "../actions/theme.action.ts";

const initialState={
    value:0,
}
export interface ThemeState{
    type:string
    payload:number
}

export default  function themeReducer(state= initialState,{type,payload}:ThemeState){
    switch (type){
        case ACTION_DARK:
            return {...state, value:state.value=1}
        case ACTION_LIGHT:
            return {...state, value:state.value=0}
        case ACTION_SET:
            return {...state, value: payload}
        default:
            return  state;
    }
}