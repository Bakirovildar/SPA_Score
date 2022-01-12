import React, {Component} from 'react'
import './App.css';
import {HeaderComponent} from "./Components/Header/Header.component";

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
            </div>
        );
    }

}

