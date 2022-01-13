import React, {Component} from 'react'
import './App.css';
import {HeaderComponent} from "./Components/Header/Header.component";
import Shop from "./Components/Shop/Shop";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu: [
                {name: 'Shop'},
                {name: 'Sale'},
                {name: 'Features'},
                {name: 'Blog'},
                {name: 'About'},
                {name: 'Contact'},
            ],
            subMenu: [
                {name: 'HomePage1'},
                {name: 'HomePage2'},
                {name: 'HomePage3'},
            ],
            cartItemName: [
                {name: 'White Shirt With Pleat Detail Back', cartInfo: '1 x 19$'},
                {name: 'White Shirt With Pleat Detail ', cartInfo: '1 x 19$'},
                {name: 'White Shirt With Pleat  Back', cartInfo: '1 x 19$'},
            ],
            products: [
                {
                    name: 'Мяч select foot',
                    id: 3,
                    price: '$76.00',
                    imgUrl: 'https://images.unsplash.com/photo-1594713110068-373988a737e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                },
                {
                    name: 'Мяч puma foot',
                    id: 4,
                    price: '$72.00',
                    imgUrl: 'https://images.unsplash.com/photo-1569367095329-7804373aea37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                },
                {
                    name: 'Мяч adidas PRO 22 foot',
                    id: 5,
                    price: '$78.00',
                    imgUrl: 'https://images.unsplash.com/photo-1594749795098-7ed8a1c1209a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                },

                {
                    name: 'Мяч basket',
                    id: 1,
                    price: '$75.00',
                    imgUrl: 'https://images.unsplash.com/photo-1482195740274-e367dbcdb9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                },
                {
                    name: 'Мяч volleyball',
                    id: 2,
                    price: '$73.00',
                    imgUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                }
            ]
        }
    }


    render() {
        return (
            <div className="App">
                <HeaderComponent
                    key={1}
                    menuName={this.state.navMenu}
                    subMenu={this.state.subMenu}
                    cartItemName={this.state.cartItemName}

                />
                <Shop
                    products={this.state.products}
                />
            </div>
        );
    }

}

