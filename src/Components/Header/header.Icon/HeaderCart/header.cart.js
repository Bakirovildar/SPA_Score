import React from "react";
import classes from './HeaderCart.module.css'

const HeaderCart = props => {
    return (
        <div className={classes.HeaderCart}>
            <div className={classes.wrapperCart}>

                <div className={classes.productCart}>
                    <div className={classes.Cart}>
                        <img src="" alt=""/>
                        <div>
                            <a href="">White Shirt With Pleat Detail Back</a>
                            <p>1 x $19.00</p>
                        </div>
                    </div>

                    <div className={classes.Cart}>
                        <img src="" alt=""/>
                        <div>
                            <a href="">White Shirt With Pleat Detail Back</a>
                            <p>1 x $19.00</p>
                        </div>
                    </div>

                    <div className={classes.Cart}>
                        <img src="" alt=""/>
                        <div>
                            <a href="">White Shirt With Pleat Detail Back</a>
                            <p>1 x $19.00</p>
                        </div>
                    </div>

                </div>
                <div className={classes.totalCart}><p>total:$75</p></div>
                <div className={classes.cartFooter}>
                    <button>view cart</button>
                    <button>checkout</button>
                </div>

            </div>

        </div>
    )
}

export default HeaderCart