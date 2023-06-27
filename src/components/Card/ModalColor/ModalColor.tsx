import { Dispatch, SetStateAction } from "react"
import styles from "./ModalColor.module.scss"
interface IModalColor {
  handleColorSelection:(color: string) => void;
}

const ModalColor = ({handleColorSelection}:IModalColor) =>{
  const colors = [
    "#8fd0ff",
    "#54d19d",
    "#d6d84d",
    "#ffa98f",
    "#ff7676",
    "#8679f8",
    "#f54aca",
    "#93ff8f",
    "#fa7845",
    "#b7babd",
    "#484949",
    "#69451b"
  ]
  return(    
      <div className={styles.modal}>
        {colors.map((color) => (
          <div
            key={color}
            className={styles.colorOption}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelection(color)}
          ></div>
        ))}
      </div>    
  )
}

export default ModalColor