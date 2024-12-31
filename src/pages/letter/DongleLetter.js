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
                  우리가 2019년에 처음 만났을 때가 엊그제 같은데, 이렇게 오랜 친구가 되어 정말 기뻐. <br/>
                  너와 함께한 시간들이 내 인생에서 얼마나 소중한지 몰라.<br/>
                  너는 항상 나에게 큰 힘이 되어주었고, 너의 밝은 에너지가 주변을 환하게 만들어. <br/>
                  그래서 오늘은 너에게도 그만큼의 사랑과 응원을 보내고 싶어. <br/>
                  우리가 취업을 앞두고 있는데, 좋은 곳에 취업해서 멋진 미래를 함께 만들어가자! <br/>
                  돈도 많이 벌고, 꿈도 이루자!<br/>
                  그리고 꼭 빠른 시일 내에 여행 가자! 새로운 곳에서의 모험을 함께 나누고 싶어. <br/>
                  너와의 여행은 언제나 기대가 돼!<br/>
                  다시 한 번 생일 축하하고, 앞으로의 모든 일들이 잘 풀리기를 바랄게. <br/>
                  항상 너를 응원할게!
                  </S.MainfontLetter> 
                  <S.BigfontLetter>예주가</S.BigfontLetter> 
                </div>
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
