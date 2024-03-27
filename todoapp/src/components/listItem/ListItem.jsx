import React from 'react';
import DeleteButton from '../deletebutton/DeleteButton';
import styles from './listItem.module.css';


function ListItem(props) {
    return (
        <div className="item">
            <input type="checkbox" className="checkbox"></input>
            <label className="label">{props.name}</label>
            <DeleteButton />

        </div>
    );
}

export default ListItem;
