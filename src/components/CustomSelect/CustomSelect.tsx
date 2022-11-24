import Select from "react-select";
import { styles } from "./styles";
import { ISelect } from "../../types";

export const CustomSelect = (props: ISelect) => {
  return <Select styles={styles} {...props}/>;
};
