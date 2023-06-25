import React from 'react';
import styles from "./Header.module.scss";

import Search from './Search/Search';
import { INote } from '../../types/Note';


interface IHeader {
  taskList: INote[];
}


const Header = ({taskList}:IHeader) => {
  
  return (
    <>    
      <header className={styles.header}>     
        <img src="iconecore.svg" alt="Lupa" />   
        <label>CoreNotes</label>
        <Search placeholder='Pesquisar Notas' taskList={taskList}/>            
      </header>
    </>
  )
}

export default Header   