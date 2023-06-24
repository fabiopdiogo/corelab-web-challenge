import Card from '../Card/Card';
import styles from './Body.module.scss'
import { useState } from 'react';
import CreateNote from '../CreateNote/CreateNote';
import { INote } from '../../types/Note';
interface Props{
  setMenuIsVisible(setMenuIsVisible: boolean): void;
}

const Body = () => {
  const [taskList, setTaskList] = useState<INote[]>([]);
  return (
    <div className={styles.Container}>
      <CreateNote 
      taskList={taskList}
      setTaskList={setTaskList}/>
      
      <div className={styles.Cards}>  
        <Card title="Card1">Lavar louça</Card>
        <Card title="Card1">Lavar louça</Card>
        <Card title="Card1">Lavar louça</Card>
        <Card title="Card1">Lavar louça</Card>
      </div>
    </div>
  )
}

export default Body;   