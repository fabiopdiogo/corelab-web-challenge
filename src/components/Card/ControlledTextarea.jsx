import { useState } from 'react';
import { useController } from 'react-hook-form'

import style from "./textarea.module.scss"

const ControlledTextarea = ({name, control, defaultValue='', ...props}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const{
    field: { onChange }
  } = useController({ name, control, defaultValue })

  const handleBlur = () => {
    onChange(inputValue);
    console.log(inputValue)
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return(
    <textarea {...props} value={inputValue} onChange={handleChange} onBlur={handleBlur} className={style.textarea}/>
  )
}

export default ControlledTextarea