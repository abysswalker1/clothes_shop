import React from 'react';
import './schedule.css'

const Schdule: React.FC< {schedule?: string}> = (props) => {
    return (
        <span className='schedule'>
            Время работы
            <span className="schedule-popup">
                {props.schedule || ' ... '}
            </span>
        </span>
    );
};

export default Schdule;