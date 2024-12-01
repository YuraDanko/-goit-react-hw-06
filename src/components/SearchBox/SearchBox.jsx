import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.wraper}>
      <label>
        Find contacts by name
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
