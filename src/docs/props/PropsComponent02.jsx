import React from 'react';

const PropsComponent02 = (props) => {
// 컨테이너의 span 태그를 props로 넘겨서 받음
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  );
};

export default PropsComponent02;