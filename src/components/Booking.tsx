import { useState } from "react";
import { getTrips } from "../api/trips.api";
import SearchDetail from "./SearchDetail";

export const Booking = () => {
  const [trips, setTrips] = useState([]);

  const handleSearch = async (query: string) => {
    const data = await getTrips(query);
    console.log(data);
  };
  return (
    <div className="book1">
      <BookName />
      <hr />
      <SearchDetail onSearch={handleSearch} />
    </div>
  );
};

export const BookName = () => {
  return (
    <div className="book1ing">
      <div className="book1ing-bus">
        <img src="../img/bus.svg" alt="" />
        <span className="sp-bus">300k</span>
      </div>
      <div className="book1ing-plane">
        <img src="../img/plane.svg" alt="" />

        <span>Máy bay</span>
        <p className="sale-plane">-20k</p>
      </div>
      <div className="book1ing-train">
        <img src="../img/train.svg" alt="" />

        <span>309k</span>
        <p className="sale-plane">-20k</p>
      </div>
    </div>
  );
};
