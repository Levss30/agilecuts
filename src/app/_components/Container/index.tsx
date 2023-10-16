interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${className} px-[140px] mb-4`}>{children}</div>;
};

export default Container;
