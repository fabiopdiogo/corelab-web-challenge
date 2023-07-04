import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Search.module.scss'
import { useForm } from 'react-hook-form'
import { INote } from '../../../types/Note';

interface ISearch {
  placeholder: string;
  onChange?: () => void;
  taskList: INote[];
}

const Search = ({taskList}: ISearch) => {

const[title, setTitle] = useState<string>("");

const searchNote = (e: ChangeEvent<HTMLFormElement>) => {
     e.preventDefault();   
     
     console.log(title)
      taskList.forEach((note) =>{
        if(note.title === title){
          console.log("Encontrei")
          alert(`Tarefa ${note.title}`)
        }
        else{
          console.log('Não encontrei')
        }
      })

  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
      setTitle(e.target.value)
    } 
  };
  return (
    <form  onSubmit={searchNote} className={styles.searchBar}>      
      <input 
          type="text" 
          name="title" 
          placeholder="Pesquisar notas"
          onChange={handleChange}
          value={title}
        /> 
      <button type="submit">
        <img src="search.svg" alt="Lupa" />
      </button>   
    </form>

  );
};

export default Search;
