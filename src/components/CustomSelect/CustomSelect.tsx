import Select from "react-select";
import { IOption } from "../../types";
import { styles } from "./styles";

interface IProps {
  options: IOption[];
  onChange: (event: IOption | null) => void;
  value: IOption;
}

export const CustomSelect = (props: IProps) => {
  return <Select {...props} isSearchable={false} styles={styles} isMulti={false} />;
};
