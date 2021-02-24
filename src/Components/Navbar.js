import React from 'react';
import '../Styles/Navbar.scss';
import {Link} from "react-router-dom";
import {routes} from "../Routes";

function Navbar() {
    return (
        <div className={'navbar'}>
            <div className={'navbar__title'}>Make Friends</div>
            <div className={'navbar__links'}>
                <Link style={{marginRight:'1.5rem',textDecoration:'none',color:'black'}} to={routes.main.path}>{routes.main.title}</Link>
                <Link style={{marginRight:'1.5rem',textDecoration:'none',color:'black'}} to={routes.listItems.path}>{routes.listItems.title}</Link>
            </div>
        </div>
    );
}

export default Navbar;