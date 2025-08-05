import React, {useState} from 'react';

// result는 사용자가 입력한 결과
// 빨간 버튼을 누르면 글자를 빨갛게
// 파란 버튼을 누르면 글자를 파랗게
// 핑크색 입력 시 글자를 없앤다. 

const Colors = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("기본텍스트"); 

  const onClickToChangeColors = (e) => {
    const innerText = e.target.innerText;
    if(innerText === "빨간색 버튼") {
      setColor('red')
    } else {
      setColor('blue')
    }
  };  

  const onChangeInput = (e) => {
    const value = e.target.value;
    value === "핑크색" ? setText("") : setText(value)
  }

  return (
    <div>
      <p style={{color}}>{text}</p>
      <input type="text" onChange={onChangeInput}/>
      <button onClick={onClickToChangeColors}>빨간색 버튼</button>
      <button onClick={onClickToChangeColors}>파란색 버튼</button>
    </div>
  );
};

export default Colors;