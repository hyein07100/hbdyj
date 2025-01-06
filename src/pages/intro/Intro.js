import React from "react";
import S from "./style.js";
import GlobalStyle from "../global/GlobalStyle";
import Junsu from '../../img/junsu.jpeg'

const Intro = ()=>{
  const infoData = [
    { label: "이름:", value: "김예진" },
    { label: "나이:", value: "예쁜나이스물다섯살" },
    { label: "생일:", value: "2001.02.28" },
    { label: "나랑 친구한지:", value: "2866일째" },
  ];
  return(
  <S.Background>  
    <GlobalStyle />
    <S.Cafe24Font>Who is <S.HighlightedText>Yejin?</S.HighlightedText></S.Cafe24Font>
    {infoData.map((info,index)=>
    <S.MainFont key={index}>
      <S.MainFontHighlight>{info.label}</S.MainFontHighlight> {info.value}
    </S.MainFont>)}
    <S.HobbyFont>좋아하는것</S.HobbyFont>
    {/* <img src={Junsu}></img> */}




  </S.Background>);
};

export default Intro;