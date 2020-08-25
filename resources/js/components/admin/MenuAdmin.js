import React from 'react';
import MenuItem from './MenuItem';

const MenuAdmin = (props) => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column " data-widget="treeview" role="menu">
                <MenuItem page='home' icon='home' onChangePage={props.onChangePage} item='Accueil'/>
                <MenuItem page='question' icon='list' onChangePage={props.onChangePage} item='Questions'/>
                <MenuItem page='answer' icon='pen' onChangePage={props.onChangePage} item='Réponses'/>
            </ul>
        </nav>
    );
};
export default MenuAdmin;