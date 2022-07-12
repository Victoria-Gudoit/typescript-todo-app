import { ChangeEventHandler } from "react";

type Props = {
  value: string;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler;
  options?: ("ALL" | "DONE" | "TODO")[],
};

function Checkbox({ value, label, checked, onChange }: Props) {
  return (
    <label>
      <input
        type="radio"
        name="tasks"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export const CheckboxGroup: React.FC<Props> = ({
  value: groupValue,
  options,
  onChange,
}) => { 
  return (
    <>
      {options!.map((value: string) => (
        <Checkbox
          value={value}
          label={value}
          checked={value === groupValue}
          onChange={onChange}
        />
      ))}
    </>
  );
};
