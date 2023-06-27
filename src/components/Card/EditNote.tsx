import { useForm } from 'react-hook-form'
import ControlledTextarea from "./ControlledTextarea"
import styles from "./EditNote.module.scss"

interface Props{
  note: string;
  onSave:() => void;
  setNote:(data: string) => void;
}
const EditNote = ({note,onSave,setNote}: Props) => {
  const {control, handleSubmit, formState: {isValid}} = useForm({

  })

  const handleSaveEdit = (data: any) => {
   onSave();
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