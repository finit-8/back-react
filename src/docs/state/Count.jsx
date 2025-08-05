import React, { useState } from 'react';

const Count = () => {
  // let num = 0

  const [number, setnumber] = useState(0)   // 상태를 바꾸고 싶다면 useState + 비구조 할당
  console.log("number", number)             // useState 인자 초기값 (0), 초기값 (0)을 바꾸기 위한 setNumber
  console.log("setnumber", setnumber)

  const increase = (e) => {
    setnumber(number + 1)
  }

  // -1 감소 버튼을 만들고 이벤트를 연결하기
  const decrease = (e) => {
    setnumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={decrease}>-1 감소</button>
      <button onClick={increase}>+1 증가</button> 
    </div>
  );
};

export default Count;