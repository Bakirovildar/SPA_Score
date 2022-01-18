import React from "react";
import classes from './FooterMenu.module.css'
import Categories from "./Catigories/Categories";
import Links from "./Links/Links";
import Help from "./Help/Help";

const FooterMenu = props => {
    return (
        <div className={classes.FooterMenu}>
            <Categories />
            <Links />
            <Help />
        </div>
    )
}

export default FooterMenu