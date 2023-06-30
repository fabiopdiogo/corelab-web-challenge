import Card from '../Card/Card';
import styles from './Body.module.scss'

import { baseURL } from "../../utils/constant";
import axios from "axios"

import CreateNote from '../CreateNote/CreateNote';
import { INote } from '../../types/Note';

interface IBody {
  taskList: INote[];
  setTaskList: React.Dispatch<React.SetStateAction<INote[]>>;
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
}

const Body = ({taskList, setTaskList,setUpdateUI}: IBody) => {


  const deleteNote = (id: number) => {
    axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState) => !prevState)
    })  

  };
  
  return (
    <div className={styles.Container}>
      <CreateNote 
      taskList={taskList}
      setTaskList={setTaskList}
      setUpdateUI={setUpdateUI}/>

          <div className={styles.Cards}>
            {taskList.length > 0 && (
              <>
                {/* Mapear notas favoritas */}
                {taskList.filter((note) => note.favorite === true).map((note) => (
                  <div>          
                    <Card 
                      data-favorite="true"
                      id={note._id}
                      note={note.note}
                      title={note.title}
                      color={note.color}
                      favorite={note.favorite}
                      handleDelete={deleteNote}
                      setUpdateUI={setUpdateUI}                    
                    />
                  </div>
                ))}

                {/* Mapear notas não favoritas */}
                {taskList.filter((note) => note.favorite === false).map((note) => (
                  <div>          
                    <Card 
                      id={note._id}
                      note={note.note}
                      title={note.title}
                      color={note.color}
                      favorite={note.favorite }
                      handleDelete={deleteNote}
                      setUpdateUI={setUpdateUI}                   
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