import { useEffect, useState } from 'react';
import TableBodyEl from './TableBodyEl';
import TableHeader from './TableHeader';
import { useSelector, useDispatch } from 'react-redux';
import { getTablesInStore } from '../Store/Slices/TableSlice';
import axios from 'axios';
import Pagination from '../Paginations/Paginations';
import gif from '../img/8.gif';

const Table = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.table.isLoaded);
  const tables = useSelector((state) => state.table.tables);
  const searchValue = useSelector((state) => state.table.searchValue);

  const [currentPage, setCurrentPage] = useState(1);
  const tablesOnPage = 10;
  const lastPageNum = currentPage * tablesOnPage;
  const firstPageNum = lastPageNum - tablesOnPage;

  useEffect(() => {
    const getTabels = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(getTablesInStore(res.data));
    };
    getTabels();
  }, [isLoaded]);
  let currentTabels = 0;
  let totalTabels = 0;
  if (isLoaded) {
    currentTabels = tables.slice(firstPageNum, lastPageNum);
    totalTabels = tables.length;
  }
  return (
    <>
      <div className="table">
        <table>
          <TableHeader />
          {isLoaded ? (
            currentTabels
              .filter((val) => {
                if (val.title.toLowerCase().includes(searchValue.toLowerCase())) return true;
              })
              .map((val) => (
                <TableBodyEl id={val.id} body={val.body} title={val.title} key={val.id} />
              ))
          ) : (
            <img src={gif} alt="loading" />
          )}
        </table>
        <footer>
          {isLoaded ? (
            <Pagination
              currentPage={currentPage}
              totalPagesCount={totalTabels / tablesOnPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            ''
          )}
        </footer>
      </div>
    </>
  );
};

export default Table;
