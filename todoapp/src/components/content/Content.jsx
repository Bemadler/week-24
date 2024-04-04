import {useState, useEffect} from "react";
import ListItem from "../listItem/ListItem";
import styles from "./content.module.css";
import AddButton from "../addbutton/AddButton.jsx";


function Content() {
//   const items =[{ id: 1, name: "Посмотреть урок по Реакту", isChecked: false, color: "red"},
//   {id: 2, name: "Делать домашку", isCheked: true, color: "blue"},
//   {id: 3, name: "Позаниматься йогой", isCheked: false, color: "green"},
//   {id: 4, name: "Написать список продуктов" , isCheked: false, color: "black"} ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storeData = localStorage.getItem("toDoList");
    if(storeData) {
      setItems(JSON.parse(storeData));
    }
  }, []);


  return (
    <main className={styles.content}>
      <ul>
        {
          items.map((item) => 
          <ListItem name={item.name} color={item.color}/>
          )
        }
      </ul>
      <AddButton />
    </main>
  );
}

export default Content;
