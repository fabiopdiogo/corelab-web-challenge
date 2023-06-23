import React from 'react';
import styles from "./Header.module.css";

import Search from './Search/Search';


interface Props{
  setMenuIsVisible(setMenuIsVisible: boolean): void;
}

const Header = () => {
  const handleClick = (data : void) =>{
   
  }
  return (
    <>    
      <header className={styles.header}>     
        <img src="iconecore.svg" alt="Lupa" />   
        <label>CoreNotes</label>
        <Search placeholder='Pesquisar Notas' />            
      </header>
    </>
  )
}

export default Header   