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
  onChange: (event: IOptions | unknown, actionMeta: ActionMeta<IOptions | unknown>) => void;
  value: IOptions;
  options: IOptions[];
}

export interface IOptions {
  value: number;
  label: string;
}

export interface IButton {
  children: ReactNode;
  disabled: boolean;
}
