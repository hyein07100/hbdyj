import React, { useState } from "react";
import S from './style.js';
import GlobalStyle from "../global/GlobalStyle.js";

const DongleLetter = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'landers'; 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert(`${password}? 그거 아닌데? 친구에게 관심이 없구만?!`); 
    }
  };

  return (
    <S.Background>
      <GlobalStyle />
      {isAuthenticated ? (
        <div>동글 편지다</div> 
      ) : (
        <form onSubmit={handleSubmit}>
          <S.Bigfont>편지를 확인하기 위해서 비밀번호를 입력해줘!</S.Bigfont>
          <S.Mainfont>hint : 예주가 좋아하는 야구단의 구단명 <br/> </S.Mainfont>
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

export default DongleLetter;
