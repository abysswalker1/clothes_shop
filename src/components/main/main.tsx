import React from 'react';
import './main.css'

type Props = {
    children?: JSX.Element[] | React.FC[]
}

const Main = (props: Props) => {
    return (
        <main className='main'>
            <div className="main__container container">
                <>{props.children}</>
            </div>
        </main>
    );
};

export default Main;