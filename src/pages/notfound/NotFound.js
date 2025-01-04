import React from "react";
import NotFoundImg from '../../img/notfound.jpg';
import S from './style.js'

const NotFound = () =>  {
  return(
  <div>
    <S.Image src={NotFoundImg}></S.Image>
    <S.Text>길 잘못들었당 .. </S.Text>
  </div>
)
};

export default NotFound;