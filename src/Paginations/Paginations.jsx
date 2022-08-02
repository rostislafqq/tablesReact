import { Link } from 'react-router-dom';
const Pagination = (props) => {
  const num = [];

  for (let i = 1; i <= Math.ceil(props.totalPagesCount); i++) {
    num.push(i);
  }
  return (
    <>
      <button
        onClick={() => {
          props.setCurrentPage(props.currentPage - 1);
        }}>
        <Link to={`/${props.currentPage - 1}`}>Назад</Link>
      </button>
      <ul>
        {num.map((val) => (
          <li
            key={val}
            onClick={() => {
              props.setCurrentPage(val);
            }}>
            <Link className={props.currentPage === val ? 'active' : ''} to={`/${val}`}>
              {val}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          props.setCurrentPage(props.currentPage + 1);
        }}>
        <Link to={`/${props.currentPage + 1}`}>Далее</Link>
      </button>
    </>
  );
};

export default Pagination;
