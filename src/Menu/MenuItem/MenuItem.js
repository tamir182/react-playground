import React from 'react';
import './Menu.css'


function MenuItem(props) {
    return (<li>
            🍏<a href={props.link}> {props.label} {props.icon}</a>
        </li>
    );
}

export default MenuItem;