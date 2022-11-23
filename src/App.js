import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    // missingChild api(GET)
    //axios('https://missingChild.pythonanywhere.com/allFoundChild')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    /*{ heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' }, */

    { heading: '이름', value: 'name' },
    { heading: '성별', value: 'username' },
    { heading: '당시 나이', value: 'phone' },
    { heading: '현재 나이', value: 'website' },
    { heading: '착의사항', value: 'name' },
    { heading: '발생 장소', value: 'address.city' },
    { heading: '발생일', value: 'address.suite' },
    { heading: '신고 내용', value: 'company.catchPhrase'}
  ]

  return (
    <div className="App">
      <h1>실종 아동 신고 어드민 페이지<img src="https://user-images.githubusercontent.com/95032287/202388454-3f650c2e-0c64-40ef-badf-76910c0a8fd1.png" width = "10%" height = "10%"/></h1>
      <p>신고 접수 현황 확인이 가능합니다</p>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;