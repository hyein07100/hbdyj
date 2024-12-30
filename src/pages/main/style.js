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

S.Cafe24Font = styled.div`
  font-family: 'Cafe24Nyangi-W-v1.0', sans-serif; 
  font-size: 10rem;
  text-align: center;
  margin-top: 10%;
`;

S.HighlightedText = styled.span`
color: #BCE55C; 
`;

S.Button = styled.button`
  margin-top: 20%;
  width: 200px;
  height: 50px;
  background-color: pink;
  color: #fff;
  font-size: 16px;
  font-family: 'UhBeeSe_hyun', sans-serif; 
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #ff69b4; 
  }
`

export default S;