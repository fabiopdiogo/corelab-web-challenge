import { useForm } from 'react-hook-form'
import ControlledTextarea from "./ControlledTextarea"
import styles from "./EditNote.module.scss"

import { baseURL } from "../../utils/constant";
import axios from "axios"


interface Props{
  id:number; 
  note: string;
  onSave:() => void;
  setNote:(data: string) => void;
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditNote = ({id,note,onSave,setNote,setUpdateUI}: Props) => {
  const {control, handleSubmit, formState: {isValid}} = useForm({})

  const handleSaveEdit = (data: any) => {
    axios.put(`${baseURL}/update/${id}`,{note:data}).then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState) => !prevState)
    })  
   onSave();
   console.log(data)
   setNote(data)   
  }
  return (
      <form onSubmit={handleSubmit(handleSaveEdit)} >
        <ControlledTextarea
          placeholder = "Digite sua mensagem"
          rows="4"
          control={control}
          name="text"
          defaultValue={note}
          onBlur={handleSaveEdit}
        />
        <button type="submit" className={styles.button}></button>
      </form>
   )
}

export default EditNote