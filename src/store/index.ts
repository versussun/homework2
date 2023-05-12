import {createStore} from 'redux';
import themeReducer from './reducers/theme.reducer.ts';

export interface  ThemeStore{
    value:number
}
export const store = createStore(
    themeReducer
)
export default store;
