import React, { useState } from "react";
import S from './style.js';
import GlobalStyle from "../global/GlobalStyle.js";

const GumaLetter = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'eagles'; 
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
          생일 축하해! 오늘은 너의 25번째 생일이야. <br/>
          시간이 정말 빠르다, 그치? 우리가 고등학생 때 처음 만났던 게 엊그제 같은데, 벌써 이렇게 오랜 친구가 되었네. <br/>
          2019년부터 시작된 우리의 우정이 이렇게 계속 이어져 온 것에 정말 감사해.<br/>
          너와 함께한 모든 순간들이 소중하고, 너의 웃음과 긍정적인 에너지가 내 삶에 큰 힘이 되어줘. <br/>
          항상 너를 좋아하고 있어. 앞으로도 함께 많은 추억을 만들어가자!<br/>
          특별한 오늘, 너의 모든 소원이 이루어지길 바라. 다시 한 번 생일 축하해!<br/>
          </S.MainfontLetter> 
          <S.BigfontLetter>수경이가</S.BigfontLetter> 
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <S.Bigfont>편지를 확인하기 위해서 비밀번호를 입력해줘!</S.Bigfont>
          <S.Mainfont>hint : 수경이가 좋아하는 야구단의 구단명 <br/> </S.Mainfont>
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

export default GumaLetter;
