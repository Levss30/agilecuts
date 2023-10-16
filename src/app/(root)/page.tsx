import Image from "next/image";
import Hero from "./components/Hero";
import Container from "../_components/Container";
import Reason from "./components/Reason";
import Divide from "./components/Divide";
import Card from "../_components/Card";
import CardInfo from "./components/CardInfo";
import Footer from "../_components/Footer";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Reason />
        <Divide />
        <Card
          title="Minimize os danos causados por ausências e aumente seus ganhos"
          items={[
            "Desenvolva ofertas e promoções exclusivas, utilizando o envio de mensagens automáticas por SMS e WhatsApp.",
            "Transmita lembretes dos compromissos marcados aos clientes e otimize seu tempo.",
            "Facilidade nos agendamentos",
            "Preferência dos clientes",
            "Administração de agenda e app",
          ]}
          imagem="https://cdn-icons-png.flaticon.com/512/8299/8299024.png"
        />
        <Divide />
        <CardInfo />
      </Container>
    </main>
  );
}
