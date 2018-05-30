import React from 'react';

const Header = (props) => {
    return (
        <header>
            <p className='logo'>Search App</p> 
            <input onChange={props.keyword} type='text' />
        </header>
    );
}

export default Header;