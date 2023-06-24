import styles from './CreateNote.module.scss'

import React,{useState, ChangeEvent, FormEvent, useEffect} from "react"

import { INote } from '../../types/Note'

interface Props {
  btnText?: string;
  taskList: INote[];
  setTaskList?: React.Dispatch<React.SetStateAction<INote[]>>
  task?: INote | null;
  handleUpdate?(id: number, title: string, note: string): void;
}

const CreateNote = ({taskList, setTaskList, task,handleUpdate}: Props) => {
  const[id, setId] = useState<number>(0);
  const[title, setTitle] = useState<string>("");
  const[note, setNote] = useState<string>("");

  useEffect(() => {
    if(task){
      setId(task.id);
      setTitle(task.title);
      setNote(task.note);
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(handleUpdate){
      handleUpdate(id, title, note)
    }else{
      const id = Math.floor(Math.random() * 1000)
      const newTask: INote = {id, title, note}
      console.log(newTask)
      setTaskList!([...taskList, newTask]);
      console.log(taskList)
      setTitle("")
      setNote("")
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value);
    }
    else {
      setNote(e.target.value)
    }
  };

  return(
    <form onSubmit={addTaskHandler} className={styles.inputCard}>
      <input
         type="text" 
         name="title" 
         placeholder="Título da tarefa" 
         onChange={handleChange}
         value={title}
         className={styles.title}/>
      <input  
         type="text" 
         name="note" 
         placeholder="Criar nota..." 
         onChange={handleChange}
         value={note}
         className={styles.note}/>
      <button>Enviar</button>
    </form>
  )
}

export default CreateNote;