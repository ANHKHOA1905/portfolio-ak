import React from 'react';
import './_menu.scss'
import {navigate} from "gatsby";
import {faHouse, faIdCard, faUniversity} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MENUS = [{
    id: 1,
    label: "Home",
    icon: faHouse,
    click: () => {
        navigate("/")
    }
}, {
    id: 2,
    label: "Contact",
    icon: faIdCard,
    click: () => {
        navigate("/contact/")
    }
}, {
    id: 3,
    label: "About",
    icon: faUniversity,
    click: () => {
        navigate("/about/")
    }
}, {
    id: 4,
    label: "Social",
    icon: faHouse,
    click: () => {
        console.log('Social')
    }
}]

const Menu = () => {
    return (<div className="menu">
        {MENUS.map((item) => {
            return <div key={item.id} onClick={item.click} className="menu__element">
                <FontAwesomeIcon icon={item.icon} /> {item.label}
            </div>
        })}
    </div>);
};

export default Menu;
