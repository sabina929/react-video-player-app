import styled from "styled-components";

const StyledVPlayer = styled.div`
  background: ${props => props.theme.bgcolor};
  max-width: 100vw;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  // max-height: 1600px;
  min-height: 100vh;
  
  transition: all 0.5s ease;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`;

export default StyledVPlayer;
