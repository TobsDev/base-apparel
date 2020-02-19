import React from 'react';
import logo from '../images/logo.svg'
import './coming-soon-header';

const ComingSoonHeader = () => (
    <div className="coming-soon-header">
        <a href="/">
            <img src={logo} alt="" className="coming-soon-header__logo"/>
        </a>
    </div>
);

export default ComingSoonHeader