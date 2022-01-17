import React, {Component} from 'react'
import './App.css';
import {HeaderComponent} from "./Components/Header/Header.component";
import Shop from "./Components/Shop/Shop";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sale from "./Components/Sale/Sale";
import Features from "./Components/Features/Features";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const state = {
    isHeaderCart: false,
    sports: ['football', 'basketball', 'volleyball'],
    navMenu: [
        {
            name: 'Home',
            url: 'index.html',
            subMenu: [
                {
                    name: 'HomePage1',
                    url: 'index.html'
                },
                {
                    name: 'HomePage2',
                    url: 'index.html'
                },
                {
                    name: 'HomePage3',
                    url: 'index.html'
                },
            ],
        },
        {
            name: 'Shop',
            url: '/shop'
        },
        {
            name: 'Sale',
            url: '/sale'
        },
        {
            name: 'Features',
            url: '/features'
        },
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        },
    ],
    cartItemName: [
        {name: 'White Shirt With Pleat Detail Back', cartInfo: '1 x 19$'},
        {name: 'White Shirt With Pleat Detail ', cartInfo: '1 x 19$'},
        {name: 'White Shirt With Pleat  Back', cartInfo: '1 x 19$'},
    ],
    allProducts: [
        {
            sport: 'football',
            name: 'Мяч select foot',
            id: 1,
            price: '$76.00',
            imgUrl: 'https://images.unsplash.com/photo-1594713110068-373988a737e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
        },
        {
            sport: 'football',
            name: 'Мяч puma foot',
            id: 2,
            price: '$72.00',
            imgUrl: 'https://images.unsplash.com/photo-1569367095329-7804373aea37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        },
        {
            sport: 'football',
            name: 'Мяч adidas PRO 22 foot',
            id: 3,
            price: '$78.00',
            imgUrl: 'https://images.unsplash.com/photo-1594749795098-7ed8a1c1209a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },

        {
            sport: 'basketball',
            name: 'Мяч basket',
            id: 4,
            price: '$75.00',
            imgUrl: 'https://images.unsplash.com/photo-1482195740274-e367dbcdb9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
        },
        {
            sport: 'volleyball',
            name: 'Мяч volleyball',
            id: 5,
            price: '$73.00',
            imgUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            sport: 'volleyball',
            name: 'Мяч volleyball',
            id: 6,
            price: '$73.00',
            imgUrl: 'https://images.unsplash.com/photo-1521138054413-5a47d349b7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
        },
        {
            sport: 'basketball',
            name: 'Мяч basket',
            id: 7,
            price: '$73.00',
            imgUrl: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            sport: 'football',
            name: 'Мяч football',
            id: 8,
            price: '$73.00',
            imgUrl: 'https://images.unsplash.com/photo-1511167814253-23b850fcd859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        }
    ],
    products: []
}

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = state
        this.state.products = this.state.allProducts
    }


    onClickSports = (sportsName) => {
        const allProducts = [...this.state.allProducts]

        const filterProducts = allProducts.filter(product => product.sport === sportsName)

        this.setState({
            products: filterProducts
        })
    }

    onClickIcon = () => {
        !this.state.isHeaderCart
            ? this.setState({isHeaderCart: true})
            : this.setState({isHeaderCart: false})
    }



    render() {

        let products = this.state.products

        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderComponent
                        key={1}
                        menuItems={this.state.navMenu}
                        cartItemName={this.state.cartItemName}
                        onClickIcon={this.onClickIcon}
                        state={this.state}
                    />

                    <Routes>
                        <Route path='/shop' element={
                            <Shop
                                sportsName={this.state.sports}
                                products={products}
                                onClickSports={this.onClickSports}
                            />}
                        />
                        <Route path='/sale' element={<Sale/>}/>
                        <Route path='/features' element={<Features/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes>

                </div>
            </BrowserRouter>
        );
    }

}

