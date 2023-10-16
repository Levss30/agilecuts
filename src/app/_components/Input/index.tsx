interface InputProps {
  label?: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  className?: string;
}

const Input = ({
  label,
  placeholder,
  type,
  required,
  className,
}: InputProps) => {
  return (
    <div className="flex flex-col flex-1 gap-1">
      {label && (
        <label className="font-regular">
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
};

export default Input;
