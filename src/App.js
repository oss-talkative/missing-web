import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    // missingChild api(GET)
    axios('https://missingChild.pythonanywhere.com/allFoundChild')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: '이름', value: 'name' },
    { heading: '성별', value: 'gender' },
    { heading: '당시 나이', value: 'age' },
    { heading: '현재 나이', value: 'ageNow' },
    { heading: '착의사항', value: 'alldressing' },
    { heading: '발생 장소', value: 'occrAdd' },
    { heading: '발생일', value: 'occrDate' },
    { heading: '신고 유형', value: 'writingTarget' },
    { heading: '신고 내용', value: 'inform' }
  ]

  return (
    <div className="App">
      <h1>실종 아동 신고 어드민 페이지<img src="https://user-images.githubusercontent.com/95032287/202388454-3f650c2e-0c64-40ef-badf-76910c0a8fd1.png" width="10%" height="10%" /></h1>
      <p>신고 접수 현황 확인이 가능합니다</p>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;