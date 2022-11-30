import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 456px;
  margin: 10px;
  text-align: center;
`;

const BillInput = styled.input`
  /* width: 100%; */
`;

const Total = styled.p`
  margin: 30px 0;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 40px;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  margin: 30px 0;
  font-size: 32px;
  color: #756c6c;
  @media (max-width: 744px) {
    font-size: 24px;
    margin: 0;
  }
`;

export { StyledForm, BillInput, Total, Title, Subtitle };
