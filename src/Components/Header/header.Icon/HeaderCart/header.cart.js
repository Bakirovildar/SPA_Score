import React from "react";
import classes from './HeaderCart.module.css'
import CartProduct from "./CartProduct/CartProduct";
import Products from "../../../Shop/Products/Products";


const HeaderCart = props => {

    let countPrice = 0

    props.state.productsInCart.map(p => {
        countPrice = Number(countPrice) + Number(p.price)
        return countPrice
    })

    return (
        <div className={classes.HeaderCart} >
            <div className={classes.wrapperCart}>

                <div className={classes.productCart}>

                    {props.state.productsInCart.map(product => {
                        return (
                            <CartProduct
                                product={product}
                                onClickImgDelete={props.onClickImgDelete}
                            />
                        )
                    })}


                </div>
                <div className={classes.totalCart}><p>total:${countPrice}</p></div>
                <div className={classes.cartFooter}>
                    <button>view cart</button>
                    <button onClick={() => props.onClickCheckoutCart()}>checkout</button>
                </div>

            </div>

        </div>
    )
}

export default HeaderCart