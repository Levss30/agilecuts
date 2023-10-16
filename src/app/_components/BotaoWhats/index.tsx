"use client";

import { useRouter } from "next/navigation";
import { BsWhatsapp } from "react-icons/bs";

const ButtonWhats = () => {
  const router = useRouter();

  // Função para redirecionar para o WhatsApp ao clicar no botão
  const redirectToWhatsApp = () => {
    // Substitua 'SEU_NUMERO' pelo número de telefone para o qual você deseja redirecionar
    const phoneNumber = "11976595091";

    // Crie a URL do WhatsApp com o número de telefone
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    // Abra a URL no navegador
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="bg-green-500 hover:bg-green-600 text-white rounded-full focus:outline-none"
      onClick={redirectToWhatsApp} // Chame a função ao clicar no botão
      style={{ cursor: "pointer" }} // Altere o cursor para indicar que é clicável
    >
      <BsWhatsapp size={35} />
    </div>
  );
};

export default ButtonWhats;
