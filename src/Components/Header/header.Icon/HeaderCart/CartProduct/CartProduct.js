import React from "react";
import classes from './CartProduct.module.css'
import Products from "../../../../Shop/Products/Products";

class CartProduct extends React.Component {


    render() {
        const state = this.props.state
        console.log(this.props)
        return (
            <div className={classes.Cart}>
                {console.log(state)}
                <img
                    onClick={() => this.props.onClickImgDelete(this.props.product.id)}
                    src={this.props.product.imgUrl}
                    alt=""
                />
                <div>
                    <a href="">{this.props.product.name}</a>
                    <p>{this.props.product.price}</p>
                </div>
            </div>
        )
    }
}

export default CartProduct