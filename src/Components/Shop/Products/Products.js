import React, {Component} from 'react'
import classes from './Products.module.css'

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
                            <a href="">{product.name}</a>

                            <p>{product.price}</p>
                            <button>Купить</button>

                        </div>
                    )
                })}


            </div>
        )
    }
}

export default Products

