import React from 'react';
import './_header.scss'
import Menu from "../Menu/menu";


const Header = () => {
    return (<div className="header">
        <div className="header__element">curriculum vitae
        </div>
        <Menu className="header__element"/>
    </div>);
};

export default Header;
