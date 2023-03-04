import React from 'react';
import Location from "../../common/location/location";
import {NavLink} from "react-router-dom";
import './preHeader.css';

const PreHeader = () => {
    return (
        <div className='pre-header'>
            <div className='pre-header__container container'>
                <Location />
                <Location />
                Вход / Регистрация
            </div>
        </div>
    );
};

export default PreHeader;