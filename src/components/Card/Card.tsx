import React, { ReactNode } from "react";
import styles from "./Card.module.scss";
import { INote } from "../../types/Note";
import EditNote from "./EditNote"
interface ICard {
  taskList: INote[];
  editNoteState: boolean;
  handleDelete(id: number): void;
  handleEdit(task: INote): void;
}

const Card = ({ taskList, handleDelete, handleEdit, editNoteState }: ICard) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task)=>(
          <div className={styles.Card}>
            <div>
                <h2 className={styles.title}>{task.title}</h2>       
                <p className={styles.note}>
                   {!editNoteState && task.note}
                   {editNoteState && <EditNote id={task.id} note={task.note}/>}
                </p>  
            </div>
            <div className={styles.actions}>
                <div className={styles.edits}>
                  <img src="edit.svg" onClick={() => handleEdit(task)} />               
                  <a href=""><img src="color.svg" onClick={() => {}} /> </a>
                </div>
                <div>
                  <a href=""><img src="remove.svg" className="bi bi-trash" onClick={() => {handleDelete(task.id)}} />   </a>
                </div>                
           </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas adicionadas!</p>
      )}
    </>
  );
};

export default Card;
