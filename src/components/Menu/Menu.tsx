import {useDispatch, useSelector} from "react-redux";
import {setDarkAction, setLightAction} from "../../store/actions/theme.action.ts";
import  styles from './Menu.module.css'
import {Theme} from "../HomeWork/HomeWork.tsx";
import themeStyles from "../../assets/Theme.module.css"


export default function Menu(){
    const dispatchTheme = useDispatch();
    const theme:Theme  = useSelector(state=>state) as Theme;
    return (
        <div className={[styles.menu ,(theme.value==0?themeStyles.black:themeStyles.light)].join(" ")}>
            <div>Menu</div>
            <button onClick={()=>dispatchTheme(setDarkAction())}>Dark</button>
            <button onClick={()=>dispatchTheme(setLightAction())}>Light</button>
        </div>);
}