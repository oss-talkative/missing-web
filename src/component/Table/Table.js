import React, {useState} from 'react'
import axios from 'axios';


function Table({ list, colNames, width = "auto", height = "auto"
}){     {/* api 확인을 위한 부분 (7 ~ 15)*/}
    const [data, setDate] = useState(null);
    const onClick = async() => {
        try{
            const response = await axios.get('https://kseenyoung.pythonanywhere.com/allFoundChild',);
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
            <button onClick={onClick}> 불러오기 </button>
            {data && <textarea rows={15} value={JSON.stringify(data, null,2)} readOnly={true}/>}

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

export default Table