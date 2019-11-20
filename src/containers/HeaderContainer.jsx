import React from 'react';
import { NavLink } from 'react-router-dom';
const HeaderContainer = ({children}) => {
    return(
        <header className="App-header">
            <NavLink className='App-link' style={{ marginRight: '10px' }} to="/">Home</NavLink>
            {children}
        </header>
    )
}

export default HeaderContainer