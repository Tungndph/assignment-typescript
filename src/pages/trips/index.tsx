import { useEffect, useState } from "react";
import { ITrip } from "../../interfaces";
import { Link } from "react-router-dom";
import axios from "axios";
import { deleteTrip } from "../../api/trips.api";
import Swal from "sweetalert2";
interface TripProps {
  data: ITrip;
  refetchTrips: () => void;
}

const TripList: React.FC<TripProps> = ({ data, refetchTrips }) => {
  const [trips, setTrips] = useState<ITrip[]>([]);

  const getTrips = async () => {
    try {
      const tripsResponse = await axios.get("http://localhost:3000/trips");
      const trips = tripsResponse.data;

      const busHousePromises = trips.map((trip) =>
        axios.get(`http://localhost:3000/busHouses/${trip.busHouseId}`)
      );
      const busHouses = await Promise.all(busHousePromises);

      const tripsWithBusHouses = trips.map((trip, index) => ({
        ...trip,
        busHouse: busHouses[index].data,
      }));

      setTrips(tripsWithBusHouses);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };
  useEffect(() => {
    getTrips();
  }, []);

  console.log(trips);

  return (
    <>
      <div className="mb-4 mt-4 ">
        <h2 className="text-2xl font-bold text-center">DANH SÁCH CHUYẾN XE</h2>
      </div>

      <div className="flex justify-between">
        <button
          className=" hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg"
          style={{ width: "20%", background: "#FEC7B4" }}
        >
          <Link to="/admin/trips/add" className="text-white">
            Thêm mới chuyến xe
          </Link>
        </button>
        <select name="" id="" className="w-56  border px-3 py-2 rounded-xl">
          <option>3 ngày tiếp theo</option>
          <option value={1}>1 tuần tiếp theo</option>
          <option value={2}>1 tháng tiếp theo</option>
        </select>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg mt-5 ">
        <h2 className="text-xl font-bold mb-4">Danh sách chuyến xe</h2>{" "}
        <div>
          {trips.map((trip) => (
            <Trip key={trip.id} data={trip} refetchTrips={getTrips} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TripList;

const Trip = (props: { data: ITrip; refetchTrips: () => void }) => {
  const handleDelete = async (id: string | number) => {
    try {
      const { value: confirmDelete } = await Swal.fire({
        title: "Xác nhận xóa",
        text: "Bạn có chắc muốn xóa chuyến đi này?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      });

      if (confirmDelete) {
        await deleteTrip(id);
        props.refetchTrips();
        console.log("Xóa chuyến đi thành công");

        Swal.fire("Xóa thành công!", "Chuyến đi đã được xóa.", "success");
      }
    } catch (error) {
      console.error("Lỗi khi xóa chuyến đi:", error);

      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đã xảy ra lỗi khi xóa chuyến đi",
      });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-7">
      <div className="flex justify-between mb-2">
        <h3 className="text-2xl font-bold">Mã chuyến: {props.data.id}</h3>
        <span className="text-sm font-medium bg-blue-500 text-white px-2 py-1 rounded">
          Số ghế: {props.data.seats}
        </span>
      </div>
      <div className="flex mt-4">
        {" "}
        <p className="text-xl mb-1 font-semibold">
          Nhà xe: {props.data.busHouse?.name}
        </p>
        <p className="text-sm mb-1 ml-8 font-bold ">
          SĐT nhà xe: {props.data.busHouse?.phone}
        </p>
      </div>
      <div className="flex">
        {" "}
        <p className="text-base mb-2 mt-3 ">
          Khởi hành: {props.data.startTime}
        </p>{" "}
        <p className="text-lg mb-2  ml-20">Bến xe: {props.data.station}</p>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-base font-medium ">
          Điểm đi: {props.data.fromStation}
        </span>
        <span className="text-base font-medium">
          Điểm đến: {props.data.toStation}
        </span>
      </div>
      <div className="flex justify-start mt-4">
        <Link to={`/admin/trips/${props.data.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Sửa
          </button>
        </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(props.data.id)}
        >
          Xóa
        </button>
      </div>
    </div>
  );
};
