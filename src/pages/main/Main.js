import React from "react";
import S from './style.js';
import GlobalStyle from "../global/GlobalStyle.js";
import { NavLink } from "react-router-dom";

export default function Main() {
  
  return(
    <S.Background>
      <GlobalStyle />
      <S.Cafe24Font>HAPPY <S.HighlightedText>YJ</S.HighlightedText> DAY!</S.Cafe24Font>
      <S.MainFont>20250228 예진이의 스물 다섯번째 생일을 축하하며 <br/>사랑하는 친구 혜인이가</S.MainFont>
      <NavLink to={"/selectLetter"}>
        <S.Button>편지 확인하러 가기</S.Button>
      </NavLink>
    </S.Background>
  );
};