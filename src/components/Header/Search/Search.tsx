import styles from './Search.module.scss'
import { useForm } from 'react-hook-form'

interface ISearch {
  placeholder: string;
  onChange?: () => void;
}

const Search = (props: ISearch) => {
  const { register, handleSubmit} = useForm({
    mode: 'onChange',
  });

  const handleSearch = (data : any) => {
    console.log('submit', data);
  }

  return (
    <form  onSubmit={handleSubmit(handleSearch)} className={styles.searchBar}>      
      <input type="text" placeholder={props.placeholder} {...register('todo')} /> 
      <button type="submit">
        <img src="search.svg" alt="Lupa" />
      </button>   
    </form>

  );
};

export default Search;
