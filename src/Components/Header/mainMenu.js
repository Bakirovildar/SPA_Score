import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.component.css'

export const MainMenu = props => {

    return (
        <ul className="main_menu">
            {props.menuItems.map(navItem => menuItem(navItem))}
        </ul>
    )

    function menuItem(navItem) {
        return (
            <li>
                <NavLink to={navItem.url}>{navItem.name}</NavLink>
                {navItem.subMenu && navItem.subMenu.length > 0 ? subMenu(navItem) : ''}
            </li>
        )
    }

    function subMenu(navItem) {
        return (
            <ul className="sub_menu">
                {navItem.subMenu.map(s => {
                    return <li><NavLink to={s.url}>{s.name}</NavLink></li>
                })}
            </ul>
        )
    }
}