import React from 'react'


export const MainMenu = props => {
    return (
        <ul className="main_menu">
            <li>
                <a href="index.html">Home</a>
                <ul className="sub_menu">
                    {props.subMenu.map(s => {
                        return <li><a href="index.html">{s.name}</a></li>
                    })}
                </ul>
            </li>
            {props.menuName.map(navName => {
                return (<li>
                        <a href="product.html">{navName.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}