import styled from "styled-components";

const StyledButton = styled.button`
  padding: 13px;
  font-size: 24px;
  color: #ffffff;
  background: #2ed2c9;
  border: none;
  cursor: pointer;
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
