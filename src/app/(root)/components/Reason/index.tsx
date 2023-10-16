import { reasonData } from "../_data/reason";
import ReasonCard from "./_components/ReasonCard";

const Reason = () => {
  return (
    <div className="flex justify-center gap-[40px] mt-[80px] w-full">
      {reasonData.map((reason, index) => (
        <ReasonCard
          key={index}
          title={reason.title}
          description={reason.description}
        />
      ))}
    </div>
  );
};

export default Reason;
