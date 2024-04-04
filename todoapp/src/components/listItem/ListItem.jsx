import { useState} from'react';
import React from 'react';
import DeleteButton from '../deletebutton/DeleteButton';
import styles from './listItem.module.css';


function ListItem({ name, color}) {
    const [checked, setChecked] = useState(false); 
    const handleCheckedState = () => {
        setChecked(!checked);
    }
    return (
        <div className={styles.item}>
            <input type="checkbox" className="checkbox" 
            onClick={handleCheckedState}>
            </input>
            <label style = {checked
                ? {textDecorationLine: "line-through"}
                : {textDecorationLine: "none"}}>{name}</label>
            <DeleteButton className={styles.button}/>
        </div>
    );
}

export default ListItem;
