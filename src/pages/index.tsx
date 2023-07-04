import { useEffect, useState } from "react";
import styles from "../styles/ToDo.module.scss";

import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import { INote } from "../types/Note";
import { baseURL } from "../utils/constant";

import axios from "axios"

const TodoList = () => {
  const [taskList, setTaskList] = useState<INote[]>([]);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/get`)
    .then((res) =>{
      console.log(res.data);
      setTaskList(res.data)
    })
  }, [updateUI]);

  
  return (    
    <div className={styles.main}>
      <Header taskList={taskList}/>      
      <Body 
        taskList={taskList}
        setTaskList={setTaskList}        
        setUpdateUI={setUpdateUI}
      />     
    </div>
    
  );
};

export default TodoList;