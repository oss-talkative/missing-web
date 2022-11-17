import React, {Component} from "react";
import './App.css';

import Table from './component/Table/Table'

const list = [
  {이름: "가가가", 성별: "남", 주민번호: "111111-2222222", 발생일: "2016-02-13", 발생시분: "11:23", 발생장소: "서울시 노원구"},
  {이름: "나나나", 성별: "여", 주민번호: "222222-1111111", 발생일: "2014-10-23", 발생시분: "21:10", 발생장소: "서울시 서대문구"},
  {이름: "다다다", 성별: "남", 주민번호: "111111-2222222", 발생일: "2020-08-05", 발생시분: "08:40", 발생장소: "대전시 서구"},
  {이름: "라라라", 성별: "여", 주민번호: "222222-1111111", 발생일: "2018-04-10", 발생시분: "20:22", 발생장소: "부산시 해운대구"},
]

const colNames = ['이름', '성별', '주민번호', '발생일', '발생시분', '발생장소'] /* 항목을 추가해주면 됨 */

class App extends Component {
  render() {
    return <div className="App">
      <Table list={list} colNames={colNames}/>
    </div>
  }
}

export default App;
