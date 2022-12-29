import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagramSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './iconSocial.scss'


const handler = {
    'facebook': {
        icon: faFacebookSquare,
        link: 'https://www.facebook.com/profile.php?id=100021975845270',
        color: '#4267B2'
    },
    'instagram': {
        icon: faInstagramSquare,
        link: 'https://instagram.com/',
        color: '#C13584'
    },
    'linkedin': {
        icon: faLinkedin,
        link: 'https://www.linkedin.com/',
        color: '#0077B5'
    }
}

const handleClickIcon = (link = '') => {
    if (!link) return
    window.open(link, '_blank')
}

const IconSocial = (props) => {

    const {channel, width, height} = props
    return (
        <div className='social' onClick={() => {
            handleClickIcon(handler[channel].link)
        }}>
            <FontAwesomeIcon style={{
                width: `${width}px`,
                height: `${height}px`,
                color: handler[channel].color,
            }} icon={handler[channel].icon}/>
        </div>
    );
};

export default IconSocial;
