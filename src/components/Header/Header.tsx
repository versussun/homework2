import styles from './Header.module.css'
import themeStyles from "../../assets/Theme.module.css"
import {useSelector} from "react-redux";
import {Theme} from "../HomeWork/HomeWork.tsx";
export default  function Header(){
    const theme:Theme  = useSelector(state=>state) as Theme;
    return (<div className={[styles.header ,(theme.value==0?themeStyles.black:themeStyles.light)].join(" ")}>HEADER</div>);
}