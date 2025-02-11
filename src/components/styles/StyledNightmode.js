import styled from "styled-components";

const StyledNightmode = styled.div`
  font-family: Helvetica, sans-serif;
  font-weight: 800;
  font-size: 1.6em;
  color: ${props => props.theme.color};
  padding: 0;
  margin: 20px;

  /* CSS taken from https://www.w3schools.com/howto/howto_css_switch.asp */
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(76, 76%, 50%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: hsl(276, 24%, 96%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: hsl(276, 24%, 96%);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px hsl(276, 24%, 96%);
  }

  input:checked + .slider:before {
    transform: translateX(16px);
    background-color: hsl(76, 76%, 50%);
  }

  .slider.round {
    border-radius: 30px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default StyledNightmode;
