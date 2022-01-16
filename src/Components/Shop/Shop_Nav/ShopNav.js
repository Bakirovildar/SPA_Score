import React from 'react'
import classes from './ShopNav.module.css'
import {NavLink} from "react-router-dom";

const ShopNav = props => {
    return (
        <div className={classes.ShopNav}>
            <h2>Catigories</h2>
            <div><p>All</p></div>
            {props.sportsName.map((sport, index) => {
                return (
                    <ul>
                        <li onClick={() => props.onClickSports(sport, index)}><NavLink to="">{sport}</NavLink></li>
                    </ul>
                )
            })}

        </div>
    )
}

export default ShopNav