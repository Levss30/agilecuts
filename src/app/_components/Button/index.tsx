interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} w-full px-[25px] py-[8px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
