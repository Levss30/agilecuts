import { CardInfoData } from "../_data/cardinfo";
import InfoCard from "./_components/InfoCard";

const CardInfo = () => {
  return (
    <div className="grid grid-cols-1 justify-center gap-x-[100px] gap-y-[30px] mt-[80px] min-w-[290px] min-h-[290px] lg:grid-cols-3">
      {CardInfoData.map((card, index) => (
        <InfoCard key={index} icone={card.icone} text={card.text} />
      ))}
    </div>
  );
};

export default CardInfo;
