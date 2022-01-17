import React from 'react'
import './HeaderIcon.css'
import HeaderCart from "./HeaderCart/header.cart";

export const HeaderIcons = props => {

    const isHeaderCart = props.state.isHeaderCart

    return (
        <div className="header-icons" onClick={() => props.onClickIcon()}>
            <div className="header-wrapicon2" >
                <img src="/src/images/shopping-cart_icon-icons.com_69913.png"
                    className='header-icon1 js-show-header-dropdown'/>
                    <span className="header-icons-noti">0</span>
            </div>

                {isHeaderCart ?<HeaderCart /> : null }



        </div>
)
}