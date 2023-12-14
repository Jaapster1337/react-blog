import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Nav.css'

export function Nav() {
    return (
        <>
            <nav>
                    <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/">Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/summary">Overzicht</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/newPost">Nieuwe post</NavLink>
            </nav>
        </>
    );
}
