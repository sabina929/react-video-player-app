import styled from "styled-components";

const StyledPlaylistitems = styled.div`
  padding: 0 20px 0 20px;
  overflow-y: auto;
  height: 29.5vw;
  
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    // background: #888;
    background:  rgb(33, 24, 39);
  }

  ::-webkit-scrollbar-thumb:hover {
    // background: #555;
    background: hsl(276, 24%, 6%);
  }
`;

export default StyledPlaylistitems;
