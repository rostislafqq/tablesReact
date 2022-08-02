const TableBodyEl = (props) => {
  return (
    <tr>
      <td className="table__id">{props.id}</td>
      <td className="table__title">{props.title}</td>
      <td className="table__body">{props.body}</td>
    </tr>
  );
};
export default TableBodyEl;
