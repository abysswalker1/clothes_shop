import React from 'react';
import {Link} from "react-router-dom";
import './navItem.css'

type Props = {
    href: string,
    subLinks?: {text: string, href: string}[]
    subClass?: 'nav-sale' 
    active?: boolean
    children: string | JSX.Element
}

const NavItem = (props: Props) => {
    const [open, setOpen] = React.useState(false);

    function listExpand() {
        setOpen(true)
    }

    function listCollapse() {
        setOpen(false)
    }

    return (
        <div className={`nav-item ${props.active ? 'active' : ''} ${props.subClass || ''}`}
             onMouseOver={props.subLinks && listExpand}
             onMouseLeave={props.subLinks && listCollapse}
        >
            <Link to={props.href} >
                {props.children}
                {props.subLinks &&
                    <span className='nav-item__arrow'>
                        <i className="bi bi-caret-down-fill"></i>
                    </span>}
            </Link>

            { open &&
            <div className='nav-item__popup'>
                {props.subLinks?.map(
                    link => <Link key={link.text} to={link.href} className="nav-item__sub-link">{link.text}</Link>
                )}
            </div>
            }
        </div>
    );
};

export default NavItem;