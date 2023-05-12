import styles from './Page.module.css'
import {Theme} from "../HomeWork/HomeWork.tsx";
import {useSelector} from "react-redux";
import themeStyles from "../../assets/Theme.module.css"
export default function Page(){
    const theme:Theme  = useSelector(state=>state) as Theme;
    return (<div className={[styles.page ,(theme.value==0?themeStyles.black:themeStyles.light)].join(" ")}>Page</div>);
}