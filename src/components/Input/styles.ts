import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 68px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  color: #afa9a9;
  text-align: center;
  margin-bottom: 32.5px;
  &::placeholder {
    opacity: 0.6;
  }
  font-size: 18px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 744px) {
    margin-bottom: 17px;
  }
`;
