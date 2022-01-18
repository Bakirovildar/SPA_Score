import React, {Component} from 'react'
import './Header.component.css'
import {MainMenu} from "./mainMenu";
import {HeaderIcons} from "./header.Icon/headerIcons";

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
                    state={this.props.state}
                />
            </nav>
        )
    }
}