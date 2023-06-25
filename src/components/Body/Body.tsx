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
  const [editNoteState, setEditNoteState] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState<INote | null>(null);

  const deleteNote = (id: number) => {
    setTaskList(
      taskList.filter((task) =>{
          return task.id !== id;
        })
    );
  };

  const editNote = (task: INote): void =>{
    setEditNoteState(true)
    setTaskToUpdate(task)
  }
  const editColor = (task: INote): void =>{
  }

  return (
    <div className={styles.Container}>
      <CreateNote 
      taskList={taskList}
      setTaskList={setTaskList}/>
      
      <div className={styles.Cards}>
        <Card 
        taskList={taskList}
        handleDelete={deleteNote} 
        handleEdit={editNote}
        editNoteState={editNoteState}
        />
      </div>
    </div>
  )
}

export default Body;   