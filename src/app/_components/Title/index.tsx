interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <p className={`text-3xl text-black flex items-center ${className || ""}`}>
      {children}
    </p>
  );
};

export default Title;
