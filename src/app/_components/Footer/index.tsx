import Container from "../Container";
import Title from "../Title";
import {
  contatos,
  homeMenu,
  legalMenu,
  sobreMenu,
  suporteMenu,
} from "./constants/menuFooter";

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white">
      <Container className="w-full flex items-center justify-start gap-60 mt-10">
        <div className="">
          <Title className="text-white text-lg">{homeMenu.title}</Title>
          {homeMenu.links.map((item, index) => (
            <li className="list-none text-sm cursor-pointer">{item.label}</li>
          ))}
        </div>

        <div>
          <Title className="text-white text-lg">{sobreMenu.title}</Title>
          {sobreMenu.links.map((item, index) => (
            <li className="list-none text-sm cursor-pointer">{item.label}</li>
          ))}
        </div>

        <div className="">
          <Title className="text-white text-lg">{legalMenu.title}</Title>
          {legalMenu.links.map((item, index) => (
            <li className="list-none text-sm cursor-pointer">{item.label}</li>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Title className="text-white text-lg">Contato</Title>
          {contatos.map(({ icone: Icone, text }) => (
            <div className="flex gap-1 items-center cursor-pointer">
              <Icone />
              <p className="text-sm ">{text}</p>
            </div>
          ))}
        </div>
        <div className="">
          <Title className="text-white text-lg">{suporteMenu.title}</Title>
          {suporteMenu.links.map((item, index) => (
            <li className="list-none text-sm cursor-pointer">{item.label}</li>
          ))}
        </div>
      </Container>

      <div className="text-center pt-1 text-white justify-center flex pb-1 mt-8 bg-sky-950 text-sm">
        <span>
          © 2023. | Designed By: AgileCuts. | Todos Direitos Reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
