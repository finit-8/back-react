import './App.css'
import React from 'react';
import Colors from './docs/state/Colors';

function App() {
  return (
    // <> ==> React.Fragment (DOM트리임, Jsx요소를 랩해줌) 
    <React.Fragment>
      <Colors />
    </React.Fragment>
  );
}

export default App;
// 외부에서 사용하기 위해 컴포넌트에 export해줘야 한다.

// 노드.모듈스 = 파일들을 번역할 수 있는 모듈들의 집합체
// github에 올리고 받기에는 용량이 너무 커서 gitignore처리하고
// 그냥 로컬에서 yarn install로 설치하는게 더 빠름
