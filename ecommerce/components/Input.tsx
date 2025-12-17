import React from "react";

type InputProps = {
  placeholder: string;
  type: string;
  children: string;
  name: string;
  required?: boolean;
  additionalClass?: String;
};

const Input = ({
  placeholder,
  type,
  children,
  name,
  required,
  additionalClass,
}: InputProps) => {
  return (
    <div className="flex justify-end mt-3 gap-4 items-center w-full">
      <p className="flex-2 tracking-widest font-semibold text-xl">{children}</p>
      <input
        type={type}
        className={`  ${
          additionalClass
            ? additionalClass
            : "border rounded-xl text-center p-2 w-full flex-5"
        }`}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </div>
  );
};

export default Input;
