interface InfoCardProps {
  icone: React.ElementType;
  text: string;
}

const InfoCard = ({ icone: Icone, text }: InfoCardProps) => {
  return (
    <div className="flex-1 flex flex-col gap-4  bg-white border border-gray-500 rounded-md p-4 shadow-2xl hover:transform hover:-translate-y-2 transition">
      <Icone className="" size={35} />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default InfoCard;
