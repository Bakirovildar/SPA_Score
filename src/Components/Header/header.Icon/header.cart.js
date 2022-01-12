import React from 'react'
import './Header.cart.css'

export const HeaderCart = props => {
    return (

        <div className="header-cart header-dropdown">
            <ul className="header-cart-wrapitem">
                <li className="header-cart-item">
                    <div className="header-cart-item-img">
                        <img src="images/item-cart-01.jpg" alt="IMG"/>
                    </div>

                    {props.cartName.map(cart => {
                        return (
                            <div className="header-cart-item-txt">
                                <a href="#" className="header-cart-item-name">
                                    {cart.name}
                                </a>

                                <span className="header-cart-item-info">
											{cart.cartInfo}
										</span>
                            </div>

                        )
                    })}

                </li>
            </ul>

            <div className="header-cart-total">
                Total: $75.00
            </div>

            <div className="header-cart-buttons">
                <div className="header-cart-wrapbtn">

                    <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        View Cart
                    </a>
                </div>

                <div className="header-cart-wrapbtn">
                    <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        Check Out
                    </a>
                </div>
            </div>
        </div>
    )
}