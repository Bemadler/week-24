import React from "react";
import styles from './AddItem.module.css';
import {useRef} from "react";

export default function AddItem({newItem, setNewItem, addItem}) {

    const ref = useRef();
    const focus = () => {
        ref.current.focus();
    }

    return(
        <form className={styles.formBox}>
            <input
            ref={ref}
            className={styles.taskInput}
            type="text"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            >
            </input>
            <button className={styles.addButton}
            type="submit"
            onClick={addItem}
            >Добавить
            </button>
            <button onClick={focus}>Focus</button>
        </form>
    );
}

