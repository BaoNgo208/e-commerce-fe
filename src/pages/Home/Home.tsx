import MainLayout from "../../layouts/MainLayout.tsx";
import Hero from "../../components/Home/Hero.tsx";
import FeaturedProduct from "../../components/Home/FeaturedProduct.tsx";

const Home = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col space-y-4 items-center   text-white text-3xl ">
        <Hero />
        <FeaturedProduct />
      </div>
    </MainLayout>
  );
};

export default Home;
