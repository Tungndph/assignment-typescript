
import { useState } from "react"; // Import useEffect for data fetching
import { getTrips } from "../api/trips.api";
import FilterOption from "./FilterOption";
import Info from "./Info";
import ListImg from "./ListImg";
import Listing from "./Listing";
import SearchDetail from "./SearchDetail";
import { ITrip } from "../interfaces";

import { BookName } from "./Booking";
interface TripProps {
  data: ITrip;
  refetchTrips: () => void;
}
const MainDetail = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);

  const handleSearch = async (query: string) => {
    console.log(query);
    const { data } = await getTrips(query);
    setTrips(data);
    console.log(data);
  };

  return (
    <>
      <div className="container_detail">
        <div className="book1">
          <BookName />
          <hr />
          <SearchDetail onSearch={handleSearch} />
        </div>
        <div className="filter">
          <div className="filter-bar">
            <FilterOption />
            <Listing />
            <section className="listings">
              <ListImg />
              {trips.map((item) => (
                <Info key={item.id} data={item} refetchTrips={getTrips} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDetail;
