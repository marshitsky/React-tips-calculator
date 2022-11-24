import { StylesConfig } from "react-select";

export const styles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    height: "68px",
    borderRadius: "30px",
    border: "none",
    outline: "none",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    padding: "0",
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
    width: "100%",
    border: "none",
    boxShadow: "none",
    borderRadius: "30px",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "0px",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? "#2ED2C9" 
          : isFocused 
            ? "#CBE8E6" 
            : undefined,
      color: isDisabled ? "#ccc" : isSelected ? ("white" ? "white" : "black") : "black",
      cursor: isDisabled ? "not-allowed" : "default",
      borderRadius: "30px",
      height: "68px",
      display: "grid",
      alignItems: "center",
      padding: "0",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled ? (isSelected ? "#FF5630" : "#ccc") : undefined,
      },
    };
  },
};
