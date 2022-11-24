import { StyledButton } from "./styles";
import { IButton } from "../../types";

export const Button = ({ children, disabled }: IButton) => {
  return (
    <StyledButton type="submit" disabled={disabled}>
      {children}
    </StyledButton>
  );
};
