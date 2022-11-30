import { StyledButton } from "./styles";
import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

interface IProps {
  children: ReactNode;
  isDisabled: boolean;
  handleValue?: () => void;
  type: ButtonType;
}

export const Button = ({ children, isDisabled, handleValue, type }: IProps) => {
  return (
    <StyledButton type={type} disabled={isDisabled} onClick={handleValue}>
      {children}
    </StyledButton>
  );
};
