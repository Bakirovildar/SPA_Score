import React, {Component} from 'react'
import './Header.component.css'
import {MainMenu} from "./mainMenu";
import {HeaderIcons} from "./header.Icon/headerIcons";
import Products from "../Shop/Products/Products";

export class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="main_menu">
                <MainMenu
                    menuItems={this.props.menuItems}
                />
                <HeaderIcons
                    cartItemName={this.props.cartItemName}
                    onClickIcon={this.props.onClickIcon}
                    onClickCheckoutCart={this.props.onClickCheckoutCart}
                    state={this.props.state}
                    onClickImgDelete={this.props.onClickImgDelete}
                />
            </nav>
        )
    }
}