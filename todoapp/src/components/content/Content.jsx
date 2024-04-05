import React, { useState, useEffect } from 'react';
import ListItem from '../listItem/ListItem';
import styles from './content.module.css';
import AddButton from '../addbutton/AddButton.jsx';

function Content() {
  // Используем хук useState для хранения состояния списка элементов
  const [items, setItems] = useState([]);

  // Используем хук useEffect для загрузки данных из локального хранилища при монтировании компонента
  useEffect(() => {
    // Получаем данные из локального хранилища
    const storeData = localStorage.getItem('toDoList');
    // Если данные есть в локальном хранилище, устанавливаем их как состояние items
    if (storeData) {
      setItems(JSON.parse(storeData));
    } else {
      // Если данных нет, устанавливаем начальное значение списка
      setItems([
        { id: 1, name: 'Посмотреть урок по Реакту', isChecked: false, color: 'red' },
        { id: 2, name: 'Делать домашку', isChecked: true, color: 'blue' },
        { id: 3, name: 'Позаниматься йогой', isChecked: false, color: 'green' },
        { id: 4, name: 'Написать список продуктов', isChecked: false, color: 'black' }
      ]);
    }
  }, []); // Пустой массив зависимостей гарантирует выполнение useEffect только при монтировании компонента

  // Возвращаем JSX разметку с отображением элементов списка и кнопкой добавления
  return (
    <main className={styles.content}>
      <ul>
        {items.map(item => (
          <ListItem key={item.id} name={item.name} color={item.color} />
        ))}
      </ul>
      <AddButton />
    </main>
  );
}

export default Content;
