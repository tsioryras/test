import React from 'react';

const MenuItem = (props) => {
    return (
        <li className="nav-item" onClick={() => props.onChangePage(props.page)}>
            <a className="nav-link" href="#">
                <i className={'fas fa-fw fa-' + props.icon}></i>
                <p>{props.page}</p>
            </a>
        </li>
    );
}
export default MenuItem;