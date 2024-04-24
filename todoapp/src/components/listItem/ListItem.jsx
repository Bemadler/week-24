
import React from 'react';
import { useState} from'react';
import styles from './ListItem.module.css';

function ListItem(props) {
    const [checked, setChecked] = useState(false); 
    const handleCheckedState = () => {
        setChecked(!checked);
    }
    return (
        <div className={styles.item}{...props}>
            <input type="checkbox" className="checkbox" 
            onChange={handleCheckedState}>
            </input>
            <label style = {checked
                ? {textDecorationLine: "line-through"}
                : {textDecorationLine: "none"}}>{props.name}</label>
            <button className={styles.button}
            onClick={() => props.deleteItem(props.id)}>
            Удалить</button>
        </div>
    );
}

export default ListItem;

