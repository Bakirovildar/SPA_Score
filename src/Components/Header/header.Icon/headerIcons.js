import React from 'react'
import {HeaderCart} from "./header.cart";
import './Header.cart.css'

export const HeaderIcons = props => {
    return (
        <div className="header-icons">
            <a href="#" className="header-wrapicon1 dis-block">
                <img
                    src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80'
                    className='header-icon1'/>
            </a>

            <span className="linedivide1"></span>

            <div className="header-wrapicon2">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
                    className='header-icon1 js-show-header-dropdown'/>
                    <span className="header-icons-noti">0</span>
                <HeaderCart cartName={props.cartItemName} />
            </div>
        </div>
)
}