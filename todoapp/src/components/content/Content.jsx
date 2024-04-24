import React, { useState } from 'react';
import ListItem from '../listItem/ListItem';
import styles from './Сontent.module.css';
import AddItem from '../AddItem/AddItem.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';

function Content() {

  const [items, setItems] = useLocalStorage("toDoList", [])
  const [newItem, setNewItem] = useState('')

const deleteItem = (id) => {
const updatedList = items.filter((item) => item.id !== id);
setItems(updatedList);
}

const addItem =(e) =>{
  e.preventDefault()
  const id = items.lenght ? items[items.length - 1].id + 1 : 1;
  const itemToAdd = {id, checked: false, name: newItem}
  const updatedList = [...items, itemToAdd];
  setItems(updatedList);
  setNewItem('');
}


  return (
    <main className={styles.content}>
      <ul>
        {
        items.map((item) => 
          <ListItem key={item.id} name={item.name} color={item.color} 
          deleteItem={() => deleteItem(item.id)}/>
        )
      }
      </ul>
      <AddItem NewItem={newItem} setNewItem={setNewItem} addItem={addItem}/>
    </main>
  );
}

export default Content;

