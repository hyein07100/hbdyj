import React, { useState } from "react";
import S from './style.js';
import GlobalStyle from "../global/GlobalStyle.js";

const MyLetter = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'bears'; 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (password === correctPassword) {
      setIsAuthenticated(true);
    } 
      else if (password === "twins"){
      alert("twins? 너 미쳤어?")
    }
    
    else {
      alert(`${password}? 그거 아닌데? 친구에게 관심이 없구만?!`); 
    }
  };

  return (
    <S.Background>
      <GlobalStyle />
      {isAuthenticated ? (
        <div>
          <S.BigfontLetter>예진이에게</S.BigfontLetter>
          <S.MainfontLetter>
            안녕? 온라인으로 쓰는 생일편지란 참 쉽지 않구나.. <br/>
            무슨 말을 적어야할지 모르겠다 !<br/>
            일단 생일축하해🤩 <br/>
            우리 친구한지 진짜 오래된거 알아? 처음 만난게 열일곱이었잖아 <br/>
            벌써 친구한지 9년차야 진짜 미쳤지 완전 소름이야 첫인상은 한 30분 정도는 되게 별로였다가 <br/>
            (오해가 있었지만...) 그 후에 너의 필통을 보고 느꼈지 아 얜 내 단짝 운명이다 <br/>
            너에게 말 건 그 순간을 잊지 못할거야 내 고등학교 생활에서 가장 중요한 순간이지 않을까?<br/>
            그리고 방송부 생각 없는 널 끌고 방송부로 데려간건 내 고등학교 생활에서 두번째로 중요한 순간이야ㅎㅎ
            
          </S.MainfontLetter>
          <S.BigfontLetter>혜인이가</S.BigfontLetter>
        </div>
        
      ) : (
        <form onSubmit={handleSubmit}>
          <S.Bigfont>편지를 확인하기 위해서 비밀번호를 입력해줘!</S.Bigfont>
          <S.Mainfont>hint : 혜인이가 좋아하는 야구단의 구단명 <br/> </S.Mainfont>
          <S.Subfont>ex) KIA tigers인 경우 tigers</S.Subfont>
          <S.InputContainer>
              <S.input
                type="text"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            <S.Button type="submit">확인</S.Button>
          </S.InputContainer>
        </form>
      )}
    </S.Background>
  );
};

export default MyLetter;
