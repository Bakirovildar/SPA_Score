import React from 'react'
import classes from './ShopNav.module.css'

const ShopNav = props => {
    return (
        <div className={classes.ShopNav}>
            <h2>Catigories</h2>
            <ul>
                <li><a href="#">All</a></li>
                <li><a href="#">Football</a></li>
                <li><a href="#">Basketball</a></li>
                <li><a href="#">Volleyball</a></li>
            </ul>
        </div>
    )
}

export default ShopNav