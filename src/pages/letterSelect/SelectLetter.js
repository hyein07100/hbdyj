import React, { useState } from 'react';
import S from './style.js';
import GlobalStyle from '../global/GlobalStyle.js';
import guma from '../../img/guma.jpeg';
import dongle from '../../img/dongle.jpeg';
import kkak from '../../img/ggak.jpeg';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: guma, text: '수경이의 편지 확인하기!', path:'/gumaletter' },
  { src: dongle, text: '예주의 편지 확인하기!',path:'/dongleletter' },
  { src: kkak, text: '혜인이의 편지 확인하기!',path:'/myletter' },
];

const SelectLetter = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const imageClick = (path)=> {navigate(path);};
  return (
    <S.Background>
      <GlobalStyle />
      <S.MainFont>
        우리가 친구가 많지 않아서 너에게 이정도의 편지밖에 줄 수 없어 ㅜㅜ 있는 편지 보여줄게 네가 골라봐!
      </S.MainFont>
      <S.ImageContainer>
        {images.map((image, index) => (
          <S.ImageWrapper
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={()=>imageClick(image.path)}
          >
            <S.Image src={image.src} />
            <S.HoverText isHovered={hoveredIndex === index}>{image.text}</S.HoverText>
          </S.ImageWrapper>
        ))}
      </S.ImageContainer>
    </S.Background>
  );
};

export default SelectLetter;
