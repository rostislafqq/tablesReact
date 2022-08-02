import Search from './Search';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../Store/Slices/TableSlice';
const SearchContainer = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.table.searchValue);

  return <Search searchValue={searchValue} dispatch={dispatch} setSearchValue={setSearchValue} />;
};
export default SearchContainer;
