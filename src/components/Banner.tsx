import { useState } from "react";
import { getTrips } from "../api/trips.api";
import BookHome from "./BookHome";
import Search from "./Search";
import CartSupport from "./CartSupport";

const Banner = () => {
  const [trips, setTrips] = useState([]);

  const handleSearch = async (query: string) => {
    const data = await getTrips(query);
    console.log(data);
  };
  return (
    <div className="h-300">
      <div
        className="bg-cover bg-center text-center relative"
        style={{
          backgroundImage: `url('./img/banner1.png')`,
          height: "480px",
        }}
      >
        <h4 className="text-white absolute inset-x-0 bottom-0 top-40 text-2xl">
          Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
        </h4>
        <div className="book">
          <BookHome />

          <Search onSearch={handleSearch} />
        </div>

        {/* <Search onSearch={handleSearch} /> */}
        <CartSupport />
      </div>
    </div>
  );
};

export default Banner;
