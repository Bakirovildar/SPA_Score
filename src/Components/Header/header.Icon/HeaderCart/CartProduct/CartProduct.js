import React from "react";
import classes from './CartProduct.module.css'

class CartProduct extends React.Component {
    render() {
        return(
            <div className={classes.Cart}>
                <img src="https://images.unsplash.com/photo-1580153111806-5007b971dfe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""/>
                <div>
                    <a href="">White Shirt With Pleat Detail Back</a>
                    <p>1 x $19.00</p>
                </div>
            </div>
        )
    }
}

export default CartProduct