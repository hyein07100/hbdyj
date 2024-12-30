import styled from 'styled-components';

const S = {};

S.Background = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto ;
`;

S.MainFont = styled.div`
  font-family: 'UhBeeSe_hyun', sans-serif; 
  font-size: 3rem;
  font-weight: 600;
  color: pink;
  text-align: center;
  margin-top: 3%;
`

S.ImageContainer = styled.div`
  display: flex; 
  justify-content: center; 
  margin-top: 10%; 
`;

S.Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  @media (max-width: 727px) {
    width: 100px;
    height: 100px;
  }
`

export default S;