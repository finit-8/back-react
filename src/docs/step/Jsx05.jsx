import React from 'react';
import PassComponent from './PassComponent'
import UnpassComponent from './UnpassComponent'
import LuckyComponent from './LuckyComponent'
import UnlyckyComponent from './UnluckyComponent'

// age를 상수 나이로 설정(임의)
// 19세 초과 성인이라면 입장가능
// 성인이 아니라면 입장불가
// 성인과 관계 없이 age가 짝수라면 당첨
// 화면에 랜더링
const Jsx05 = () => {
  const age = 20
  const pass = age > 19
  const isEven = age % 2 === 0

  // const passComponent = <p>입장가능</p>
  // const notPassComponent = <p>입장불가</p>
  // const luckyComponent = <p>당첨</p>
  // const unLuckyComponent = <p>꽝</p>
  
  const enter = pass ? <PassComponent /> : <UnpassComponent />
  const win = isEven ? <LuckyComponent /> : <UnluckyComponent />

  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;