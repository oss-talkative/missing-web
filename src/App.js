import React, {Component, useState} from "react";
import './App.css';
//import Users from './users'
import axios from 'axios';

//import Table from './component/Table/Table'

/* 발생일: new Date('1997-03-06') 과 같이 new Date 사용 시, 화면이 나타나지 않음 */

function Table({ list, colNames, width = "auto", height = "auto"
}){   {/* api 확인을 위한 부분 (7 ~ 15)*/}
    const [data, setDate] = useState(null);
    const onClick = async() => {
        try{
            //const response = await axios.get('/allFoundChild');
            const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
            setDate(response.data);
        } catch(e) {
            console.log(e)
        }
    };
    return (
        <div style ={{ width: '100%',  boxShadow: '3px 6px 3px #ccc'}}> {/* width의 비율로 화면에 표시될 모든 가로폭 설정 */}
            <h2> 실종 아동 신고 어드민 페이지 <img src="https://user-images.githubusercontent.com/95032287/202388454-3f650c2e-0c64-40ef-badf-76910c0a8fd1.png" width = "10%" height = "10%"/></h2> {/* 페이지 상단 제목 */}
            <p>신고 접수 현황 확인이 가능합니다</p> {/* 페이지 부가 설명 */}
            
            {/* api 확인을 위한 부분 (23, 24)*/}
            {/*<button onClick={onClick}> 불러오기 </button>
            {data && <textarea rows={15} value={JSON.stringify(data, null,2)} readOnly={true}/>}
            <br /><br /><br />*/}

            <button onClick={onClick}>예쁘게 불러오기</button>
      <br /><br />
      {data && <li>{JSON.stringify(data[0], ['id', 'name', 'email'], 2)}</li>}
      {data && <li>{JSON.stringify(data[0], ['id'], 2)}</li>}
      {data && <li>{JSON.stringify(data[0], ['name'], 2)}</li>}
      {data && <li>{JSON.stringify(data[0], ['email'], 2)}</li>}
      {data && <li>id: {data[0].id}</li>}
      {data && <li>name: {data[0].name}</li>}
      {data && <li>email: {data[0].email}</li>}

            {list.length > 0 && (
                <table 
                cellSpacing ="0"
                style={{width: '100%', height: height, padding: 'Spx 10px' }}
                >
                    <thead style={{backgroundColor: 'blue', color: 'white' }}> {/* 색감 조정 */}
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>{headerItem.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

const colNames = ['이름', '성별', '당시 나이', '현재 나이', '착의 사항', '발생장소', '발생일'] /* 항목을 추가해주면 됨*/
const list = [
  {이름: "가가가", 성별: "남", 당시나이: 4, 현재나이: 20, 착의사항: "작업복차림" , 발생장소: "서울시 노원구", 발생일: "2016-02-13"},
  {이름: "나나나", 성별: "여", 당시나이: 15, 현재나이: 26, 착의사항: "운동복차림", 발생장소: "서울시 서대문구", 발생일: "2014-10-23"},
  {이름: "다다다", 성별: "남", 당시나이: 6, 현재나이: 26, 착의사항: "캐주얼차림", 발생장소: "대전시 서구", 발생일: "2020-08-05"},
  {이름: "라라라", 성별: "여", 당시나이: 10, 현재나이: 32, 착의사항: "교복차림", 발생장소: "부산시 해운대구", 발생일: "2018-04-10"},
]

class App extends Component {
  render() {
    return <div className="App">
      <Table colNames={colNames} list={list}/>
    </div>
  }
}

export default App;
