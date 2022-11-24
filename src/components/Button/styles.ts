import styled from "styled-components";

const StyledButton = styled.button`
  background: #2ed2c9;
  height: 61px;
  font-size: 24px;
  color: #ffffff;
  border: none;
  &:active {
    transform: translateX(-2px);
    box-shadow: 2px 2px 5px rgb(46, 210, 201);
  }
  &:disabled {
    opacity: 0.5;
    transform: none;
    box-shadow: none;
  }
`;

export { StyledButton };
