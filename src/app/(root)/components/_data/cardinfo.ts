import { BsGear } from "react-icons/bs";
import { BsHourglassSplit } from "react-icons/bs";
import { PiSmileySadThin } from "react-icons/pi";
import { BsCalendarCheck } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { GrLineChart } from "react-icons/gr";

export interface ICardInfo {
    text: string;
    icone: React.ElementType;
}

export const CardInfoData: ICardInfo [] = [{
    icone: BsGear, 
    text: "Automatização dos agendamentos de serviços"
},
{
    icone: BsHourglassSplit, 
    text: "Menos filas de espera"
},
{
    icone: PiSmileySadThin, 
    text: "Evitar descontentamentos"
},
{
    icone: BsCalendarCheck, 
    text: "Disponibilidade 24h por dia"
},
{
    icone: BsCashCoin, 
    text: "Integração de pagamentos"
},
{
    icone: GrLineChart, 
    text: "Integração com redes sociais"
}]