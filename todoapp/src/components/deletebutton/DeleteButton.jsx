import React from "react";
import styles from './deleteButton.module.css';

function DeleteButton() {
    
    return(
        <button className={styles.button}>Удалить</button>
    );
}

export default DeleteButton;