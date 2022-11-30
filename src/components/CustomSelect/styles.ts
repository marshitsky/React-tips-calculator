import { StylesConfig } from "react-select";
import { IOption } from "../../types";

export const styles: StylesConfig<IOption> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: "68px",
    borderRadius: "30px",
    border: "none",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    marginLeft: "50px",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "1.44",
    letterSpacing: "-0.3px",
    color: "#756c6c",
    opacity: "0.6",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    caretColor: "transparent",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    marginRight: "20px",
    padding: "0",
    boxSizing: "border-box",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    border: "none",
    borderRadius: "30px",
    boxShadow: "none",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      display: "grid",
      alignItems: "center",
      height: "68px",
      padding: "0",
      borderRadius: "30px",
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? "#2ED2C9"
          : isFocused
            ? "#CBE8E6"
            : undefined,
      color: isDisabled ? "#ccc" : isSelected ? ("white" ? "white" : "black") : "black",
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled ? (isSelected ? "#FF5630" : "#ccc") : undefined,
      },
    };
  },
};
