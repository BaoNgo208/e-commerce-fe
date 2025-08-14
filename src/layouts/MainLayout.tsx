import NavBar from "../components/Nav/NavBar.tsx";
import Footer from "../components/Footer/Footer.tsx";

interface Props {
  children: any;
}

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="wrapper d-flex align-items-stretch">
      <NavBar />
      <main className="flex-grow-1 mw-100 overflow-auto min-vh-100">
        <div className="content ">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
