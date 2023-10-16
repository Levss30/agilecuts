import Title from "@/app/_components/Title";

export interface ReasonCardProps {
  title: string;
  description: string;
}

const ReasonCard = ({ title, description }: ReasonCardProps) => {
  return (
    <div className="flex-1 flex flex-col gap-4  bg-white border border-gray-500 rounded-md p-4 shadow-2xl hover:transform hover:-translate-y-2 transition">
      <p className="text-3xl">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ReasonCard;
