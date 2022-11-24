import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  max-width: 100%;
`;

const BillInput = styled.input`
  width: 100%;
`;

const Total = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  margin: 45px 0;
`;

export { StyledForm, BillInput, Total };
