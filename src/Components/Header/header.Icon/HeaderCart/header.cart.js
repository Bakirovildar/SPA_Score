import React from "react";
import classes from './HeaderCart.module.css'
import CartProduct from "./CartProduct/CartProduct";


const HeaderCart = props => {

    return (
        <div className={classes.HeaderCart} >
            <div className={classes.wrapperCart}>

                <div className={classes.productCart}>

                    {props.state.productsInCart.map(product => {
                        return (
                            <CartProduct product={product} />
                        )
                    })}


                </div>
                <div className={classes.totalCart}><p>total:$75</p></div>
                <div className={classes.cartFooter}>
                    <button>view cart</button>
                    <button onClick={() => props.onClickCheckoutCart()}>checkout</button>
                </div>

            </div>

        </div>
    )
}

export default HeaderCart