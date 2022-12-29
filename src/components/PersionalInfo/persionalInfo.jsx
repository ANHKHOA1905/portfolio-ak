import React from 'react';
import './_persionalInfo.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faCalendar, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import IconSocial from "../IconSocial/iconSocial";

const PersionalInfo = () => {
    return (
        <div className="persionalInfo-container persionalInfo">
            <div className="persionalInfo__avatar">
                <img src={`../../test.png`} alt=""/>
            </div>
            <div className="persionalInfo__info">
                <p>Hello everybody, I am</p>
                <p className="persionalInfo__info__name">Nguyen Anh Khoa</p>
                <h4>Developer</h4>
                <div className="persionalInfo__info__contact">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                    <div><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> <p>19-05-1999</p></div>
                    <div><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><p>0847777103</p></div>
                    <div><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <p>nguyenanhkhoa19051999@gmail.com</p></div>
                </div>
                <div className="persionalInfo__info__social">
                    <IconSocial channel={'facebook'} width={40} height={40} />
                    <IconSocial channel={'instagram'} width={40} height={40} />
                    <IconSocial channel={'linkedin'} width={40} height={40} />
                </div>
            </div>
        </div>
    );
};

export default PersionalInfo;
