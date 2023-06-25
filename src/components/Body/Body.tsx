import Card from '../Card/Card';
import styles from './Body.module.scss'
import { useState } from 'react';
import CreateNote from '../CreateNote/CreateNote';
import { INote } from '../../types/Note';

interface IBody {
  taskList: INote[];
  setTaskList: React.Dispatch<React.SetStateAction<INote[]>>
}

const Body = ({taskList, setTaskList}: IBody) => {
  
  return (
    <div className={styles.Container}>
      <CreateNote 
      taskList={taskList}
      setTaskList={setTaskList}/>
      
      <div className={styles.Cards}>  

      </div>
    </div>
  )
}

export default Body;   