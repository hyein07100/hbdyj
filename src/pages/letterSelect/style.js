import styled from 'styled-components';

const S = {};

S.Background = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

S.MainFont = styled.div`
  font-family: 'UhBeeSe_hyun', sans-serif; 
  font-size: 3rem;
  font-weight: 600;
  color: pink;
  text-align: center;
  margin-top: 3%;
`;

S.ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 7%;
`;

S.ImageWrapper = styled.div`
  position: relative;
`;

S.Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 0.1px solid pink;
  transition: transform 0.3s; 
  
  &:hover {
    transform: scale(1.05); 
  }
  
  @media (max-width: 727px) {
    width: 100px;
    height: 100px;
  }
`;

S.HoverText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(250, 105, 180, 0.9); 
  width: 100%; 
  height: 100%;
  border-radius: 100%;
  color: white;
  font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  opacity: ${props => (props.isHovered ? 1 : 0)}; 
  transition: opacity 0.3s; 
  cursor: pointer;
`;

export default S;
