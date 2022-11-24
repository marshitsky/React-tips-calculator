import { StyledInput } from "./styles";
import { IInput } from "../../types/index";

export const Input = ({ type, placeholder, value, onChange }: IInput) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
};
