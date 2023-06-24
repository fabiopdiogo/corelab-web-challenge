import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = (props: ICard) => {
  return (
    <table className={styles.Card}>    
      <h2 className={styles.title}>{props.title}</h2>      
      <div className={styles.content}>{props.children}</div>      
    </table>
  );
};

export default Card;
