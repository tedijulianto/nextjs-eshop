"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomCheckBoxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ id, label, disabled, register }) => {
  return (
    <div className="w-full flex flex-row items-center gap-2">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        placeholder=""
        className="cursor-pointer"
      />
      <label htmlFor={id} className="font-medium leading-3 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
