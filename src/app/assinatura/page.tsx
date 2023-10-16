"use client";

import { IoMdArrowBack } from "react-icons/io";
import Planos from "../_components/Planos";
import { useRouter } from "next/navigation";
import Navbar from "../_components/Navbar";
import Container from "../_components/Container";

export default function Assinatura() {
  const router = useRouter();
  return (
    <main>
      <div className="flex items-center justify-center h-full">
        <div className="flex w-full items-center h-screen justify-center bg-gradient-to-r from-blue-500 via-blue-700 to-blue-400 relative">
          <div
            className="absolute left-8 top-8 cursor-pointer h-8 w-8 rounded-full hover:bg-white/[.06] flex items-center justify-center"
            onClick={() => router.push("/")}
          >
            <IoMdArrowBack className="text-white" size={25} />
          </div>

          <div className="flex justify-center items-center gap-10 rounded">
            <Planos
              title="Básico"
              description={[
                "Agenda online para gerenciar seus compromissos",
                "Possibilidade de agendar horários de barbearia",
                "Lembretes automáticos para os clientes por e-mail ou SMS",
                "Sincronização com calendários externos (por exemplo, Google Calendar)",
                "Suporte básico por e-mail",
              ]}
              valor="Gratis"
            />
            <Planos
              title="Premium"
              description={[
                "Todos os recursos do plano Essencial",
                "Gestão de estoque para controlar os produtos disponíveis",
                "Relatórios de desempenho para análise do seu negócio",
                "Personalização do layout da agenda com a identidade visual da sua barbearia",
                "Suporte prioritário por e-mail",
              ]}
              valor="R$ 60/mês"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
