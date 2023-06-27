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
  
  const deleteNote = (id: number) => {
    setTaskList(
      taskList.filter((note) =>{
        return note.id !== id;
      })
    );
  };

  const updateNote = (id: number, title:string, note:string, color:string, favorite: boolean) => {

    const updatedTask: INote = {id,title, note, color, favorite}

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    console.log(taskList)
  }


  const editColor = (id: number, title:string, note:string, color:string, favorite: boolean): void =>{
    const updatedTask: INote = {id,title, note, color, favorite}

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    console.log(taskList)
  }

  return (
    <div className={styles.Container}>
      <CreateNote 
      taskList={taskList}
      setTaskList={setTaskList}/>
          <div className={styles.Cards}>
            {taskList.length > 0 ? (
              taskList.map((note)=>(
                  <div>          
                      <Card 
                        id={note.id}
                        note={note.note}
                        title={note.title}
                        color=""
                        favorite={false}
                        handleDelete={deleteNote}
                        handleUpdate={updateNote}  
                        handleColor={editColor}                      
                      />
                  </div>
              ))
            ) : (
              <p>Não há tarefas adicionadas!</p>
            )}
          </div>
        
    </div>
  )
}

export default Body;   