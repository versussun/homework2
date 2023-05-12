export const ACTION_DARK = '[ThemeRedux] dark';
export const ACTION_LIGHT = '[ThemeRedux] light';
export const ACTION_SET = '[ThemeRedux] set';

export function setDarkAction(){
    return {
        type:ACTION_DARK,
    }
}
export function setLightAction(){
    return {
        type:ACTION_LIGHT,
    }
}

export function setThemeAction(payload:number){
    return {
        type:ACTION_SET,
        payload,
    }
}