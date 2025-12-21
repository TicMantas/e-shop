type InputProps = {
  placeholder: string;
  type: string;
  title: string;
  name: string;
  required?: boolean;
  additionalClass?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  type,
  title,
  name,
  required,
  additionalClass,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex justify-end mt-3 gap-4 items-center w-full">
      <p className="flex-2 tracking-widest font-semibold text-xl">{title}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
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
