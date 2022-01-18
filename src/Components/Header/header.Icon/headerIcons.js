import React from 'react'
import './HeaderIcon.css'
import HeaderCart from "./HeaderCart/header.cart";

export const HeaderIcons = props => {

    const isHeaderCart = props.state.isHeaderCart

    console.log("headerIcons", props)
    return (
        <div className="header-icons">
            <div className="header-wrapicon2" onClick={() => props.onClickIcon()}>
                <img src="/src/images/shopping-cart_icon-icons.com_69913.png"
                     className='header-icon1 js-show-header-dropdown'/>
                <span className="header-icons-noti">{props.state.productsInCart.length}</span>
            </div>

            {isHeaderCart && <HeaderCart
                onClickCheckoutCart={props.onClickCheckoutCart}
                state={props.state}
            />}

        </div>
    )
}