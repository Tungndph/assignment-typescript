import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";
import Main from "../Main";
import "../../../css/app.css";
import "../../../css/tailwind.css";
import { Outlet } from "react-router-dom";
const LayoutWebsite = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Banner />
        <Main />
        {/* <Outlet/> */}
      </div>
      <Footer />
    </>
  );
};

export default LayoutWebsite;
