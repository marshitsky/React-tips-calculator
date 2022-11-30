import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Total, Title, Subtitle } from "./styles";
import { useInput } from "../../hooks/useInput";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { IOption } from "../../types";

const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const Form = () => {
  const [total, setTotal] = useState(0);
  const [selectedValue, setSelectedValue] = useState<IOption>(options[0]);
  const [isDisabled, setIsDisabled] = useState(true);

  const billSum = useInput();
  const persons = useInput();

  const onChange = (event: IOption | null) => {
    if (event) {
      setSelectedValue(event);
    }
  };

  const handleTips = () => {
    const billTotalAmount = +billSum.value * (1 + selectedValue.value / 100);
    const amountPerEachPerson = billTotalAmount / +persons.value;
    setTotal(amountPerEachPerson);
  };

  useEffect(() => {
    persons.value && billSum.value ? setIsDisabled(false) : setIsDisabled(true);
  }, [persons.value, billSum.value]);

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input type="number" placeholder="Enter bill" {...billSum} />
      <Input type="number" placeholder="Enter guests" {...persons} />
      <CustomSelect value={selectedValue} onChange={onChange} options={options} />
      <Total>{`Total: ${total.toFixed(2)} $`}</Total>
      <Button isDisabled={isDisabled} type="button" handleValue={handleTips}>
        Ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};
