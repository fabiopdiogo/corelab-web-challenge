import React, { ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import styled from "styled-components";
import { INote } from "../../types/Note";
import EditNote from "./EditNote"
import ModalColor from "./ModalColor/ModalColor";

import { baseURL } from "../../utils/constant";
import axios from "axios"


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  background-color: ${(props) => props.color};
  color: inherit;
  text-decoration: none;
 
  
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 390px;
  height: 437.5882568359375px;
  top: 224.4471435546875px;
  left: 105.284423828125px;
  border-radius: 25px;
  box-shadow: 1px 1px #808080;


  img{
    cursor: pointer;
  }
`
interface ICard{
    id:number; 
    note:string;
    title:string;
    color:string;
    favorite:boolean;
    handleDelete(id: number): void;
    setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({ id, note, title,color,favorite,handleDelete, setUpdateUI }: ICard) => {
  const [colorNew, setColorNew] = useState(color);
  const [favoriteNew,setFavoriteNew] = useState<boolean>(favorite);
  const [noteNew, setNote] = useState<string>(note);
  const [showModal, setShowModal] = useState(false);
  const [editNote, setEditNote] = useState(false);


  const handleEdit = (): void =>{
    setEditNote(true)
  }

  const handleSaveEdit = () : void => {
    setEditNote(false)    
    console.log({id,noteNew});
  }
  const handleClickColor = () => {
    console.log("clicou")
    setShowModal(!showModal);
    console.log(showModal)
  };
  const handleColorSelection = (color: string) => {
    
    setColorNew(color)
    setShowModal(false);
    console.log('Cor selecionada:', color);
    axios.put(`${baseURL}/update/color/${id}`,{color:color}).then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState) => !prevState)
    })  
  };
  const handleFavorite = () => {
  };

  return (
      <StyledCard color={colorNew}>
        <div>
          <div className={styles.title}>
              <h2>{title}</h2>  
              <p onClick={() =>{
                 setFavoriteNew(!favoriteNew)
                 }
                 }> 
                  {!favoriteNew && <img src="star.svg"></img>}
                  {favoriteNew && <img src="checkedstar.svg"></img>}
              </p>
          </div>                 
          <p className={styles.note}>
            {!editNote && noteNew}
            {editNote && <EditNote id={id} note={noteNew} setUpdateUI={setUpdateUI} onSave={handleSaveEdit} setNote={setNote} />}
          </p>  
        </div>
        
        <div className={styles.actions}>
            <div className={styles.edits}>
              <img src="edit.svg" onClick={() => handleEdit()} />               
              <img src="color.svg"  onClick={() => handleClickColor()}/>
              {showModal && (
                 <ModalColor handleColorSelection={handleColorSelection} />
              )}
            </div>
            <div>
              <img src="remove.svg"  onClick={() => {handleDelete(id)}} />
            </div>                
        </div>
      </StyledCard>
  );
};

export default Card;