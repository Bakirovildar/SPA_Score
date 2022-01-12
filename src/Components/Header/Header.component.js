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
            <nav className="menu">
                <MainMenu
                    menuName={this.props.menuName}
                    subMenu={this.props.subMenu}
                />
                <HeaderIcons cartItemName={this.props.cartItemName} />
            </nav>
        )
    }
}