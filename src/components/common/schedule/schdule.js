import React from 'react';
import './schedule.css'

const Schdule = (props) => {
    return (
        <span className='schedule'>
            Время работы
            <span className="schedule-popup">
                {props?.schedule || ' ... '}
            </span>
        </span>
    );
};

export default Schdule;