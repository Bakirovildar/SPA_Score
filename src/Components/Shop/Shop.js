import React, {Component} from 'react'
import './Shop.css'
import Products from "./Products/Products";
import ShopHeader from "./Shop_Header/ShopHeader";
import ShopNav from "./Shop_Nav/ShopNav";
import ShopFooter from "./Shop_Footer/ShopFooter";

class Shop extends Component {


    render() {

        return (
            <div className='Shop'>
                <div className='ShopHeader_ShopHeader__wuiVt'><ShopHeader /></div>
                <div className='ShopNav_ShopNav__iqmpU'><ShopNav
                    sportsName={this.props.sportsName}
                    onClickSports={this.props.onClickSports}
                /></div>
                <div className='Products_Products__A83L6'>
                    <Products
                        products={this.props.products}
                        onClickToCart={this.props.onClickToCart}
                    />
                </div>
                <div className='ShopFooter_ShopFooter__7dkJW'><ShopFooter /></div>
            </div>
        )
    }
}

export default Shop