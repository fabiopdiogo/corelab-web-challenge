import styles from './CreateNote.module.scss'

import React,{useState, ChangeEvent, FormEvent, useEffect} from "react"

import { INote } from '../../types/Note'
import { baseURL } from "../../utils/constant";

import axios from "axios"

interface Props {
  btnText?: string;
  taskList: INote[];
  setTaskList?: React.Dispatch<React.SetStateAction<INote[]>>
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
  task?: INote | null;
  handleUpdate?(id: number, title: string, note: string): void;
}

const CreateNote = ({taskList, setTaskList, task,handleUpdate,setUpdateUI}: Props) => {
  const[id, setId] = useState<number>(0);
  const[title, setTitle] = useState<string>("");
  const[note, setNote] = useState<string>("");
  const[color, setColor] = useState<string>("#ffffff");
  const[favorite, setFavorite] = useState<boolean>(false);

  const addTask = () => {
    axios.post(`${baseURL}/save`, {
      title: title,
      note: note,
      color: color,
      favorite: favorite
    }).then((res) =>{
        console.log(res.data)
       })
      setTitle("")
      setNote("")
      setUpdateUI((prevState) => !prevState)
  } 

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();    
      const id = Math.floor(Math.random() * 1000)
      //const newTask: INote = {_id, title, note, color,favorite}
      //console.log(newTask)
      //setTaskList!([...taskList, newTask]);
      //console.log(taskList)
      //addTask()
    
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
    <form onSubmit={addTask} className={styles.inputCard}>
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