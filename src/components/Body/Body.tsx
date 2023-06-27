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


  const updateNote = (id: number, title: string, note: string, color: string, favorite: boolean) => {
    
    const updatedNote: INote = { id, title, note, color, favorite };
  
    const updatedItems = taskList.map((task) => {
      return task.id === updatedNote.id ? updatedNote : task;
    });
  
    setTaskList(updatedItems);
    console.log(taskList);
  }
  
  const deleteNote = (id: number) => {
    setTaskList(
      taskList.filter((note) =>{
        return note.id !== id;
      })
    );
  };
  
  return (
    <div className={styles.Container}>
      <CreateNote 
      taskList={taskList}
      setTaskList={setTaskList}/>

          <div className={styles.Cards}>
            {taskList.length > 0 && (
              <>
                {/* Mapear notas favoritas */}
                {taskList.filter((note) => note.favorite === true).map((note) => (
                  <div>          
                    <Card 
                      data-favorite="true"
                      id={note.id}
                      note={note.note}
                      title={note.title}
                      color="#ffffff"
                      favorite={note.favorite}
                      handleDelete={deleteNote}
                      handleNote={updateNote}                     
                    />
                  </div>
                ))}

                {/* Mapear notas não favoritas */}
                {taskList.filter((note) => note.favorite === false).map((note) => (
                  <div>          
                    <Card 
                      id={note.id}
                      note={note.note}
                      title={note.title}
                      color="#ffffff"
                      favorite={note.favorite }
                      handleDelete={deleteNote}
                      handleNote={updateNote}                    
                    />
                  </div>
                ))}
              </>
            )}
          </div>
      


    </div>
  )
}

export default Body;   