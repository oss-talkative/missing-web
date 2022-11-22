import './Table.css'

const Table = ({ data, column }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => <TableRow item={item} column={column} />)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem) => {

      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }

      return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default Table