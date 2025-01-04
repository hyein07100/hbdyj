import React, { useEffect, useState } from "react";
import S from './style.js';
import GlobalStyle from "../global/GlobalStyle.js"; 
import { NavLink } from "react-router-dom";


export default function Main() {
  const [isClicked,setIsClicked] = useState(false);
  const [color,setColor] = useState("#BCE55C");
  const handleClick = ()=>{
    setIsClicked((prev)=>!prev);
  }

  useEffect(()=>{
    const colors = ["#BCE55C", "#ff69b4","#F6B826"];
    let index = 0;

    const interval = setInterval(()=>{
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 300)

    return()=>clearInterval(interval);
  },[]);

  return (
    <S.Background>
      <GlobalStyle />
      <S.Cafe24Font>
        HAPPY&nbsp;
        <S.HighlightedLink to={"/yejin"} onClick={handleClick}>
          <S.HighlightedText isClicked={isClicked} color={color}>YJ</S.HighlightedText>
        </S.HighlightedLink> 
        &nbsp;DAY!
      </S.Cafe24Font>
      <S.MainFont>
        20250228 예진이의 스물 다섯번째 생일을 축하하며 <br />사랑하는 친구 혜인이가
      </S.MainFont>
      <NavLink to={"/selectLetter"}>
        <S.Button>편지 확인하러 가기</S.Button>
      </NavLink>
    </S.Background>
  );
}
