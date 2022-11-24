import { Form } from "./components/Form/Form";
import { StyledApp, Title, Subtitle } from "./styles";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <StyledApp className="app">
        <GlobalStyle />
        <Title>Welcome to App</Title>
        <Subtitle>Let’s go calculate your tips</Subtitle>
        <Form />
      </StyledApp>
    </>
  );
};
