import { useLoaderData, useNavigate } from "react-router-dom";
import { IBusHouse, ITrip } from "../../interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { putTrip } from "../../api/trips.api";
import Swal from "sweetalert2";

type UpdateTripForm = {
  busHouseId: string;
  startTime: string;
  fromStation: string;
  toStation: string;
  station: string;
  isBooked: number;
  price: number;
  seats: number;
};

const UpdateTrip = () => {
  const navigate = useNavigate();
  const { busHouses, trip } = useLoaderData() as {
    busHouses: IBusHouse[];
    trip: ITrip;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateTripForm>({
    defaultValues: trip,
  });

  const onSubmit: SubmitHandler<UpdateTripForm> = async (data) => {
    try {
      const updatedData = { ...data, id: trip.id };
      await putTrip(trip.id, updatedData);
      console.log(updatedData);

      Swal.fire({
        title: "Thành công!",
        text: "Cập nhật chuyến đi thành công!",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
      }).then(() => {
        navigate("/admin/trips");
      });
    } catch {
      Swal.fire({
        title: "Thất bại!",
        text: "Cập nhật chuyến đi thất bại!",
        icon: "error",
      });
    }
  };
  const today = new Date().toISOString().slice(0, 16);
  return (
    <>
      <div className="mb-4 mt-4 ">
        <h2 className="text-2xl font-bold text-center">CẬP NHẬT CHUYẾN XE</h2>
      </div>
      <button
        className=" hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg"
        style={{ width: "20%", background: "#FEC7B4" }}
      >
        <a href="" className="text-white">
          Thêm mới nhà xe
        </a>
      </button>
      <div className="bg-white p-4 rounded-lg shadow-md mt-3  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          className="max-w-md w-2/4 ml-5"
        >
          <div className="mb-4">
            <div className="flex flex-wrap mb-4 -mx-2">
              <div className="w-full md:w-9/12 px-2 mb-4 md:mb-0">
                <label htmlFor="nhaxe" className="block mb-2">
                  Nhà xe:
                </label>
                <select
                  className="w-80  border px-3 py-2 rounded"
                  {...register("busHouseId")}
                >
                  {busHouses &&
                    busHouses.map((item, index) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex mt-4">
                <div className="w-full px-2">
                  <label htmlFor="" className="block mb-2">
                    Thời gian khởi hành
                  </label>
                  <input
                    type="datetime-local"
                    placeholder="Thời gian khởi hành"
                    className="w-80  border px-3 py-2 rounded"
                    {...register("startTime", {
                      required: "Trường dữ liệu bắt buộc",
                    })}
                    min={today}
                  />
                  <p className="text-red-500">{errors.startTime?.message}</p>
                </div>

                <div className="w-full md:w-9/12 px-2 mb-4 md:mb-0">
                  <label htmlFor="songhe" className="block mb-2">
                    Số ghế:
                  </label>
                  <input
                    placeholder="Số ghế"
                    {...register("seats", {
                      required: "Trường dữ liệu bắt buộc",
                    })}
                    className="w-80 border px-3 py-2 rounded"
                  />
                  <p className="text-red-500">{errors.seats?.message}</p>
                </div>
                <div className="w-full md:w-9/12 px-2">
                  <label htmlFor="gia" className="block mb-2">
                    Giá:
                  </label>
                  <input
                    placeholder="Giá"
                    {...register("price", {
                      required: "Trường dữ liệu bắt buộc",
                    })}
                    className="w-80 border px-3 py-2 rounded"
                  />
                  <p className="text-red-500 mt-2">{errors.price?.message}</p>
                </div>
              </div>
            </div>

            <div className="flex mb-4 -mx-2">
              <div className="w-full md:w-9/12 px-2 mb-4 md:mb-0">
                <label htmlFor="nhaxe" className="block mb-2">
                  Bến xe:
                </label>

                <input
                  type="text"
                  placeholder="Bến xe"
                  {...register("station", {
                    required: "Trường dữ liệu bắt buộc",
                  })}
                  className="w-80  border px-3 py-2 rounded"
                />
                <p className="text-red-500">{errors.station?.message}</p>
              </div>

              <div className="w-full md:w-9/12 px-2 mb-4 md:mb-0">
                <label htmlFor="songhe" className="block mb-2">
                  Điểm đi:
                </label>

                <input
                  type="text"
                  placeholder="Điểm đi"
                  {...register("fromStation", {
                    required: "Trường dữ liệu bắt buộc",
                  })}
                  className="w-80  border px-3 py-2 rounded"
                />
                <p className="text-red-500">{errors.fromStation?.message}</p>
              </div>
              <div className="w-full md:w-9/12 px-2 mb-4 md:mb-0">
                <label htmlFor="songhe" className="block mb-2">
                  Điểm đến:
                </label>
                {/* <select
                  name="nhaxe"
                  id="nhaxe"
                  className="w-80  border px-3 py-2 rounded"
                >
                  <option>Chọn điểm đến</option>
                  <option value={1}>Hà Nội</option>
                  <option value={2}>Mỹ Đình</option>
                  <option value={3}>Gia Lâm</option>
                  <option value={4}>Nước Ngầm</option>
                </select> */}
                <input
                  type="text"
                  placeholder="Điểm đến"
                  {...register("toStation", {
                    required: "Trường dữ liệu bắt buộc",
                  })}
                  className="w-80  border px-3 py-2 rounded"
                />
                <p className="text-red-500">{errors.toStation?.message}</p>
              </div>
            </div>

            <div className="w-40">
              <button
                type="submit"
                className="bg-green-500 hover:bg-blue-700 text-white font-bold w-300 py-2 mt-5 px-4 rounded-3xl text-lg"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateTrip;
