import { useState } from 'react';
import { useController } from 'react-hook-form';

import style from "./textarea.module.scss";

const ControlledTextarea = ({ name, control, defaultValue, onBlur,...props}) => {
  //const [inputValue, setInputValue] = useState(defaultValue);
  const {
    field: { value,onChange }
  } = useController({ name, control, defaultValue });

  const handleBlur = () => {
    onChange(value);
    onBlur(value)
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <textarea {...props} value={value} onChange={handleChange} onBlur={handleBlur} className={style.textarea} />
  );
};

export default ControlledTextarea;
