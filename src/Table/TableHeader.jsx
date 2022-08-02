import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getIdSortDec,
  getIdSortAsc,
  getTitleSortDec,
  getTitleSortAsc,
  getBodySortAsc,
  getBodySortDec,
} from '../Store/Slices/TableSlice';
const TableHeader = () => {
  const dispatch = useDispatch();
  const [idSortByAsc, setidSortByAsc] = useState(true);
  const [titleSortByAsc, setTitleSortByAsc] = useState(true);
  const [bodySortByAsc, setBodySortByAsc] = useState(true);
  return (
    <tr>
      <th
        className="table_headID"
        onClick={() => {
          if (idSortByAsc) {
            dispatch(getIdSortDec());
            setidSortByAsc(false);
          } else {
            dispatch(getIdSortAsc());
            setidSortByAsc(true);
          }
        }}>
        ID{' '}
        <span>
          <svg
            className={!idSortByAsc ? 'header__svg__Active' : ''}
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
          </svg>
        </span>
      </th>
      <th
        onClick={() => {
          if (titleSortByAsc) {
            dispatch(getTitleSortDec());
            setTitleSortByAsc(false);
          } else {
            dispatch(getTitleSortAsc());
            setTitleSortByAsc(true);
          }
        }}
        className="table_headTitle">
        Заголовок{' '}
        <span>
          <svg
            className={!titleSortByAsc ? 'header__svg__Active' : ''}
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
          </svg>
        </span>
      </th>
      <th
        className="table_headBody"
        onClick={() => {
          if (bodySortByAsc) {
            dispatch(getBodySortDec());
            setBodySortByAsc(false);
          } else {
            dispatch(getBodySortAsc());
            setBodySortByAsc(true);
          }
        }}>
        Описание{' '}
        <span>
          <svg
            className={!bodySortByAsc ? 'header__svg__Active' : ''}
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
          </svg>
        </span>
      </th>
    </tr>
  );
};
export default TableHeader;
