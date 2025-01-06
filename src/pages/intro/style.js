import styled from "styled-components";
const S = {};

S.Background = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  margin: 0 auto;
`;

S.Cafe24Font = styled.div`
  font-family: 'Cafe24Nyangi-W-v1.0', sans-serif; 
  font-size: 10rem;
  text-align: center;
  margin-top: 5%;
`;

S.HighlightedText = styled.span `
  color: #BCE55C;
`;

S.MainFontHighlight = styled.span`
  color: pink;
`;

S.MainFont = styled.span`
  font-family: 'UhBeeSe_hyun', sans-serif; 
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
  text-align: left;
  margin-top: 3%;
  margin-left: 60%;
`;

S.HobbyFont = styled.div`
  font-family: 'UhBeeSe_hyun', sans-serif; 
  font-size: 2rem;
  font-weight: 600;
  color: pink;
  text-align: left;
  margin-top: 3%;
  margin-left: 10%;
`;



export default S;