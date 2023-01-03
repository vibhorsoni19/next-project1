import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Searchinput.module.css";
const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <AiOutlineSearch />
      <input  className={styles.input}   {...rest} />
    </div>
  );
};

export default SearchInput
