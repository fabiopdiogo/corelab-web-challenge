import styles from './Search.module.css'

interface ISearch {
  placeholder: string;
  onChange?: () => void;
}

const Search = (props: ISearch) => {
  return (
    <div className={styles.searchBar}>      
      <input type="text" placeholder={props.placeholder} /> 
      <a href="#">
      <img src="search.svg" alt="Lupa" />
      </a>   
    </div>

  );
};

export default Search;
