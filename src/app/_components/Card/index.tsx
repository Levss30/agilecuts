import { PiCheckCircleLight } from "react-icons/pi";

interface CardProps {
  imagem?: string;
  title: string;
  items: string[];
}

const Card = ({ imagem, title, items }: CardProps) => {
  return (
    <div className="flex w-full">
      <div className="pl-12">
        <p className="text-2xl p-4">{title}</p>
        <div className="flex flex-col gap-5">
          {items?.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <PiCheckCircleLight size={20} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex pl-40">
        <img src={imagem} alt="Image" className="w-[390px] h-[400px]" />
      </div>
    </div>
  );
};

export default Card;
