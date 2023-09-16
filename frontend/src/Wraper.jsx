import React from 'react'


import './Global.css';
const Wraper = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};


export default Wraper