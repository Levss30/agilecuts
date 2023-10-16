import Banner from "@/app/_components/Banner";
import Container from "@/app/_components/Container";

const Hero = () => {
  return (
    <section>
      <div className="w-full h-[400px] mt-10">
        <Banner
          text="O MAIS EFICIENTE SERVIÇO DE AGENDAMENTO"
          image="https://c1.wallpaperflare.com/preview/65/265/305/tattoo-shaving-shave-barber.jpg"
        />
      </div>
    </section>
  );
};

export default Hero;
