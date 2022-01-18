import React, {Component} from 'react'
import classes from './Products.module.css'
import {NavLink} from "react-router-dom";

class Products extends Component {




    render() {

        return (
            <div className={classes.Products}>

                {this.props.products.map(product => {
                    return (
                        <div className={classes.ProductsCart}>
                            <img
                                src={product.imgUrl}
                                alt="product"/>
                            <NavLink to="">{product.name}</NavLink>

                            <p>{product.price}</p>
                            <button onClick={() => this.props.onClickToCart(product.id)}>В корзину</button>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Products

