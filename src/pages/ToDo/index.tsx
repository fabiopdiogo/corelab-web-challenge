import { useEffect, useState } from "react";
import { Button, Card, Search } from "../../components";
import styles from "./ToDo.module.scss";

import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";

const TodoList = () => {

  return (    
    <div className={styles.main}>
      <Header />
      <Body />     
    </div>
    
  );
};

export default TodoList;
