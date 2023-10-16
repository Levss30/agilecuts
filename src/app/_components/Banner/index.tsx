interface ImageProps {
  image: string;
  className?: string;
  text: string;
}

const Banner = ({ image, className, text }: ImageProps) => {
  return (
    <div
      style={{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`${className} w-full h-full rounded flex justify-end items-center text-white p-12 relative`}
    >
      <div className="absolute bg-gradient-to-l from-black w-full h-full right-0 rounded" />
      <p className="text-3xl z-20">{text}</p>
    </div>
  );
};

export default Banner;
