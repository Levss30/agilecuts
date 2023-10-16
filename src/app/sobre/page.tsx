"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import SobreNos from "../_components/SobreNos";
import Title from "../_components/Title";

export default function Sobre() {
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

          <div className="w-[900px] h-[600px] bg-white border-gray-500 rounded-md shadow-2xl justify-center items-center flex flex-col">
            <div className="w-full flex px-12 gap-52 flex-col text-lg">
              <SobreNos
                title="Quem somos ?"
                description={[
                  "Somos uma empresa focada em barbeiros e cabeleireiros, Nosso software tem a intenção de diminuir estresse tanto para os salões, quanto aos clientes. Para não haver problemas de comunicação. Queremos facilitar tanto os pagamentos e agendamento, com isso tudo fica mais facil e pratico.",
                ]}
              />
              <div className="flex flex-col justify-center items-center">
                <Title className="mb-6 text-xl">Nossa equipe</Title>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      className="rounded-full h-[110px]"
                      src="https://pps.whatsapp.net/v/t61.24694-24/302006264_176612391544861_2668945696353545655_n.jpg?ccb=11-4&oh=01_AdSSezXkflHUTCcGXiRIhd5dci8zgACz3tvxMG-d8clvLQ&oe=6514A447&_nc_sid=000000&_nc_cat=104"
                      alt="Agatha"
                    />
                    <p className="text-sm">CEO</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      className="rounded-full h-[110px]"
                      src="https://pps.whatsapp.net/v/t61.24694-24/260273787_226921586340498_354202383776080282_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSubC7UC0DKj6HoanRY9rB_c39MhSbGT1DktR9DKmT28A&oe=65124A28&_nc_sid=000000&_nc_cat=102"
                      alt="Lucas"
                    />
                    <p className="text-sm">Developer</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      className="rounded-full h-[110px]"
                      src="https://pps.whatsapp.net/v/t61.24694-24/370342342_1511324886279204_1885195745474774117_n.jpg?ccb=11-4&oh=01_AdTt9d6GaVh2lEqNj7WlpCC0LrnYZ7i6x6baU2odfiLZrg&oe=6514B1C1&_nc_sid=000000&_nc_cat=104"
                      alt="Pedro"
                    />
                    <p className="text-sm">Front-end</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      className="rounded-full h-[110px]"
                      src="https://pps.whatsapp.net/v/t61.24694-24/370237267_904003444486257_379217488161163307_n.jpg?ccb=11-4&oh=01_AdRdAjpmqpTrBig1LcahYZqmEXJY4CKjsqpsaT-rwIPcnw&oe=6514A224&_nc_sid=000000&_nc_cat=102"
                      alt="Matheus"
                    />
                    <p className="text-sm">Back-end</p>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      className="rounded-full h-[110px]"
                      src="https://pps.whatsapp.net/v/t61.24694-24/368445683_214587567936270_1519504483415363586_n.jpg?ccb=11-4&oh=01_AdRkG3HOyw-eWWNC8lCSkxyruZLWPEPVN5nFNW4bH7JTwA&oe=6514AF59&_nc_sid=000000&_nc_cat=101"
                      alt="Vinicius"
                    />
                    <p className="text-sm">Designer</p>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      className="rounded-full h-[110px]"
                      src="https://pps.whatsapp.net/v/t61.24694-24/373450587_228934716473502_7790931120894931741_n.jpg?ccb=11-4&oh=01_AdQSZvTPHkUAz6JIgVDQFNDkn_9EmndcxF85LcO090o1NA&oe=651240A0&_nc_sid=000000&_nc_cat=101"
                      alt="Luiz"
                    />
                    <p className="text-sm">Analista</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      className="rounded-full h-[110px]"
                      src="https://pps.whatsapp.net/v/t61.24694-24/370414096_1352961178634251_5742927828511431749_n.jpg?ccb=11-4&oh=01_AdQVM0FJJzQP2K-nfJ_GbrOWp8HuqEGjzFFj0qcdkioSOQ&oe=6514BB0D&_nc_sid=000000&_nc_cat=105"
                      alt="Wanderlei"
                    />
                    <p className="text-sm">Analista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
