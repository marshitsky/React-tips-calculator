import { ChangeEvent } from "react";
import { ReactNode } from "react";
import { ActionMeta } from "react-select";

export interface IInput {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelect {
  onChange: (event: IOption | unknown, actionMeta: ActionMeta<IOption | unknown>) => void;
  value: IOption;
  options: IOption[];
}

export interface IOption {
  value: number;
  label: string;
}

export interface IButton {
  children: ReactNode;
  disabled: boolean;
}
