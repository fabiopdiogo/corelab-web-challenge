import { useEffect, useState } from "react";
import { Button, Card, Search } from "../../components";
import styles from "./ToDo.module.scss";

import Header from "../../components/Header/Header";

const TodoList = () => {

  return (    
    <div className={styles.main}>
      <Header />
      <p>Hello worldS</p>
    </div>
    
  );
};

export default TodoList;
