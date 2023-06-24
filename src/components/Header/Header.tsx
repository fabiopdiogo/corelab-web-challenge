import React from 'react';
import styles from "./Header.module.scss";

import Search from './Search/Search';


interface Props{
  setMenuIsVisible(setMenuIsVisible: boolean): void;
}

const Header = () => {
  
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