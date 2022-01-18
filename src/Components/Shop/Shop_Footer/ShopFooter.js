import React from 'react'
import classes from './ShopFooter.module.css'
import GetInTouch from "./GetInTouch/GetInTouch";
import FooterMenu from "./FooterMenu/FooterMenu";
import NewsLetter from "./NewsLetter/NewsLetter";
import BankCard from "./BankCard/BankCard";

const ShopFooter = props => {
    return (
        <div className={classes.ShopFooter}>
            <div className={classes.GetInTouch}><GetInTouch /></div>
            <div className={classes.FooterMenu}><FooterMenu /></div>
            <div className={classes.NewsLetter}><NewsLetter /></div>
            <div className={classes.BankCard}><BankCard /></div>
        </div>
    )
}

export default ShopFooter