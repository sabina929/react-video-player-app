import styled from "styled-components";

const StyledPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 450px;
  overflow: hidden;
  color: white;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;

export default StyledPlaylist;
