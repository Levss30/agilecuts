"use client";

import Title from "../Title";

interface SobreProps {
  title: string;
  description: string[];
}

const SobreNos = ({ title, description }: SobreProps) => {
  return (
    <div className="flex flex-col">
      <Title>{title}</Title>
      <ul className="list-disc list-inside">
        {description.map((item, index) => (
          <li key={index} className="mb-1 ">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SobreNos;
