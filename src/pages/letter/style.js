import styled from 'styled-components';

const S = {};

S.Background = styled.div`
  width: 60%;
  height: 100vh;
  background-color: ${props => (props.isAuthenticated ? '#FFD9FA' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto ;
`;

S.Bigfont = styled.div`
  font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: pink;
  text-align: center;
  margin-top: 3%;
  margin-bottom: 10%;
`

S.BigfontLetter = styled.div`
  font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: pink;
  text-align: left;
  margin-top: 3%;
  margin-bottom: 5%;
`

S.Mainfont = styled.div`
  font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  font-size: 24px;
  text-align: center;
`
S.MainfontLetter = styled.div`
  font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  font-size: 24px;
  text-align: left;
  margin-bottom: 5%;
`

S.Subfont = styled.div`
  font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  font-size: 16px;
  text-align: center;
`

S.InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.input = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid #cdcdcd;
  margin: 0 auto;
  border-radius: 50px;
  margin-top: 5%;
`

S.Button = styled.button`
  width: 80px;
  height: 30px;
  background-color:#ff69b4;
  color: #fff;
  border: none;
  border-radius: 50px;
  margin-top: 5%;
  cursor: pointer;
`



export default S;