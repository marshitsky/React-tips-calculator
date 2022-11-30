import styled from "styled-components";
import shape from "./assets/images/shape.svg";

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 10px;
  background: top left no-repeat url(${shape}) #eaf2f2;
  overflow: hidden;
`;

export { StyledApp };
