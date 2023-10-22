const ThTable = ({ColSpan,RowSpan,ThClass,title}) => {
  return (
    <th
    scope="col"
    colSpan={ColSpan}
    rowSpan={RowSpan}
    className={ThClass}
  >
    {title}
  </th>
  )
}

export default ThTable