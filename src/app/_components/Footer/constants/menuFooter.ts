import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

interface IContatos {
    icone: React.ElementType;
    text: string;
}

export const homeMenu = {title: "Início", links: [{label: "Home", path: "/link"}, {label: "Vantagens", path: "/link"}, {label: "Assinatura", path: "/link"}]}

export const sobreMenu = {title: "Sobre nós", links: [{label: "Contato", path: "/link"}, {label: "Informações da empresa"}]}

export const contatos: IContatos[]= [{icone: HiOutlineMail, text: "agilecuts@gmail.com"}, {icone: BsWhatsapp, text: "11 97659-5091"}]

export const legalMenu = {title: "Legal", links: [{label: "Política de privacidade", path: "/link"}, {label: "Termos de uso", path: "/link"}]}

export const suporteMenu = {title: "Suporte", links: [{label: "FAQ", path:"/link"}, {label: "Chat"}]}