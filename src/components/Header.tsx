import Button from "./Button";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-blue-500 h-auto p-3 ">
      <div className="flex mx-8">
        <img src="../img/logo1.svg" className="mr-4" />
        <p className="tracking-tighter py-2  text-white">
          Cam kết hoàn 150% nếu nhà xe không giữ vé
        </p>
      </div>
      <Navigation />
      <Link to="">
       
        <Button title="Hotline 24/7" />
      </Link>
      <Link to={"/signin"}>
        <Button title="Đăng nhập" />
      </Link>
    </header>
  );
};

export default Header;
