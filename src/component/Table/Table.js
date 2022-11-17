import React from 'react'

function Table({ list, colNames, width = "auto", height = "auto"}) {
    return (
        <div style ={{ width: '100%',  boxShadow: '3px 6px 3px #ccc'}}> {/* width의 비율로 화면에 표시될 모든 가로폭 설정 */}
            <h2> 실종 아동 신고 어드민 페이지 <img src="https://user-images.githubusercontent.com/95032287/202388454-3f650c2e-0c64-40ef-badf-76910c0a8fd1.png" width = "10%" height = "10%"/></h2> {/* 페이지 상단 제목 */}
            <p>신고 접수 현황이 확인 가능합니다</p> {/* 페이지 부가 설명 */}

            {list.length > 0 && (
                <table 
                cellSpacing ="0"
                style={{width: '100%', height: height, padding: 'Spx 10px' }}
                >
                    <thead style={{backgroundColor: 'black', color: 'white' }}> {/* 색감 조정 */}
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