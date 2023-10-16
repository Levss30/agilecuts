interface TextCardProps {
  className: string;
}

const TextCard = ({ className }: TextCardProps) => {
  return <p className="text-md text-black flex items-center">{className}</p>;
};

export default TextCard;
