"use client";

import { PiCheckCircleLight } from "react-icons/pi";
import Button from "../Button";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Container from "../Container";
import Title from "../Title";
import { MdEmail } from "react-icons/md";
import Input from "../Input";
import { BiSolidLock } from "react-icons/bi";

interface PlanosProps {
  title: string;
  description: string[];
  valor?: string;
}

const Planos = ({ title, description, valor }: PlanosProps) => {
  const router = useRouter();
  return (
    <div className="w-[400px] h-[500px] bg-white border-gray-500 rounded-md shadow-2xl p-4 justify-center items-center flex flex-col">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="list-disc list-inside mt-4">
        {description.map((item, index) => (
          <li key={index} className="mb-1 list-none mt-4">
            <PiCheckCircleLight className="inline-block text-green-500 mr-2" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xl font-bold text-center">
        {valor ? `${valor}` : ""}
      </p>
      <div className="mt-4 text-center bg-sky-700 rounded text-white">
        <Button>Assinar</Button>
      </div>
    </div>
  );
};

export default Planos;
