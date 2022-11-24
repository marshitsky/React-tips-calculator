import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Total } from "./styles";
import { useInput } from "../../hooks/useInput";
import {  FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { IOptions } from "../../types";
import { ActionMeta } from "react-select";

export const options: IOptions[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const Form = () => {
  const [total, setTotal] = useState("0.00");
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const billSum = useInput();
  const guestsQty = useInput();

  const billSumToCount = +Object.values(billSum)[0];
  const guestsQtyToCount = +Object.values(guestsQty)[0];

  const handleValue = (event: IOptions | any, actionMeta: ActionMeta<IOptions | unknown>) => {
    setSelectedValue(event);
  };

  const getTips = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return billSumToCount !== 0 && guestsQtyToCount !== 0
      ? setTotal(
        (
          (billSumToCount + (billSumToCount * Number(selectedValue.value)) / 100) /
          guestsQtyToCount
        ).toFixed(2),
      )
      : "0.00";
  };

  return (
    <StyledForm onSubmit={getTips}>
      <Input type={"number"} placeholder={"Enter bill"} {...billSum} />
      <Input type={"number"} placeholder={"Enter guests"} {...guestsQty} />
      <CustomSelect value={selectedValue} onChange={handleValue} options={options} />
      <Total>{`Total: ${total} $`}</Total>
      <Button disabled={guestsQty.value.length === 0 || billSum.value.length === 0}>
        Ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};
