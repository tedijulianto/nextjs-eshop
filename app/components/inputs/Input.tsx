"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
}

const Input: React.FC<InputProps> = ({ id, label, type, disabled, required, register, errors }) => {
  const error = errors && errors[id];

  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required: `${label} is required` })}
        type={type}
        placeholder=""
        className={`peer w-full p-4 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed
        ${error ? "border-rose-400" : "border-slate-300"}
        ${error ? "focus:border-rose-400" : "focus:border-slate-300"}
      `}
      />
      <label
        htmlFor={id}
        className={`absolute bg-white px-1 cursor-text text-base duration-150 transform -top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-[18px] peer-focus:-top-3 peer-focus:bg-white peer-focus:px-1
        ${error ? "text-rose-400" : "text-slate-300"}
        `}
      >
        {label}
      </label>
      {error && <p className="text-rose-400 text-xs mt-2">{error.message?.toString()}</p>}
    </div>
  );
};

export default Input;
