import styled from "styled-components";

const StyledApp = styled.div`
  width: 456px;
  margin: 15px 10px;
  text-align: center;
  @media (max-width: 744px) {
    width: 331px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 32px;
  color: #756c6c;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;

export { StyledApp, Title, Subtitle };
