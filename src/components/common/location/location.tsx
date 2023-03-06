import React from 'react';
import Schdule from "../schedule/schdule";
import './location.css'

const Location: React.FC<undefined | {loc?: string}> = (props) => {
    let loc = props?.loc || ' ... ';
    return (
        <div className='location'>
            <i className="bi bi-geo-alt-fill"></i>
            <p className="loaction-text">
                {loc}
                <Schdule />
            </p>
        </div>
    );
};

export default Location;