import React from "react";
import ListItem from "../listItem/ListItem";
import "./content.css";
import AddButton from "../addbutton/AddButton.jsx";


function Content() {
  return (
    <React.Fragment>
      <ListItem name="Посмотреть урок по Реакту"/>
      <ListItem name="Делать домашку"/>
      <ListItem name="Позаниматься йогой"/>
      <ListItem name="Написать список продуктов"/>
      <AddButton />
    </React.Fragment>
  );
}

export default Content;
