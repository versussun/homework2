import styles from "./HomeWork.module.css";
import themeStyles from "../../assets/Theme.module.css"
import Header from "../Header/Header.tsx";
import Menu from "../Menu/Menu.tsx";
import Page from "../Page/Page.tsx";
import {useSelector} from "react-redux";

export interface Theme{
    value:number;
}
export default function HomeWork() {
    const theme:Theme  = useSelector(state=>state) as Theme
    return (
        <div className={[styles.HomeWork ,(theme.value==0?themeStyles.black:themeStyles.light)].join(" ")}>
            <div className={styles.header}><Header/></div>
            <div className={styles.menu}><Menu/></div>
            <div className={styles.page}><Page/></div>
        </div>
    );
}