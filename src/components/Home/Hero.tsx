import heroImage from "../../assets/hero-image.jpg";

const Hero = () => {
  return (
    <div
      className="h-[500px] w-full flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="ml-20 text-white space-y-4">
        <span className="text-xl uppercase tracking-widest">
          Giảm 50% lần đầu
        </span>

        <h1 className="text-5xl font-bold">Ưu đãi chào khách mới</h1>

        <a
          href="#"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Mua&nbsp;ngay
        </a>
      </div>
    </div>
  );
};

export default Hero;
