import { useEffect, useState } from "react";
import styles from "./ToDo.module.scss";

import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import { INote } from "../types/Note";

const TodoList = () => {
  const [taskList, setTaskList] = useState<INote[]>([]);
  
  return (    
    <div className={styles.main}>
      <Header taskList={taskList}/>
      <Body 
        taskList={taskList}
        setTaskList={setTaskList}/>     
    </div>
    
  );
};

export default TodoList;
