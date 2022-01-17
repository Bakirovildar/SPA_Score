import React from "react";
import classes from './HeaderCart.module.css'

const HeaderCart = props => {
    return (
        <div>
            <div className={classes.HeaderCart}></div>
            <h1>Cart</h1>
        </div>
    )
}

export default HeaderCart