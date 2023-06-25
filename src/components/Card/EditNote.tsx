import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { noteSchema } from '../../modules/note/note.schema'
import ControlledTextarea from "./ControlledTextarea"
import style from "./EditNote.module.scss"
import { Dispatch, SetStateAction } from 'react'

interface Props{
  id: number;
  note: string;
  setEditNoteState?: Dispatch<SetStateAction<boolean>>
}
const EditNote = ({id,note,setEditNoteState}: Props) => {
  const {control, handleSubmit, formState: {isValid}} = useForm({

  })

  const handleSaveEdit = (data : any) => {
    console.log(data);    
  }

  return (
      <form onSubmit={handleSubmit(handleSaveEdit)}>
        <ControlledTextarea
          placeholder = "Digite sua mensagem"
          rows="4"
          control={control}
          name="text"
          defaultValue={note}
        />
        <button type="submit"></button>
      </form>
   )
}

export default EditNote