import React from 'react';
import S from './style.js';
import GlobalStyle from '../global/GlobalStyle.js';
import guma from '../../img/guma.jpeg'

const SelectLetter = () => {
  return (
 <S.Background>
  <GlobalStyle />
  <S.MainFont>우리가 친구가 많지 않아서 너에게 이정도의 편지밖에 줄 수 없어 ㅜㅜ 있는 편지 보여줄게 네가 골라봐! </S.MainFont>
  <S.ImageContainer>
    <S.Image src={guma}/>
    <S.Image src={guma}/>
    <S.Image src={guma}/>
  </S.ImageContainer>
 </S.Background>);
};

export default SelectLetter;