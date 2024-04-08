import { SubmitHandler, useForm } from "react-hook-form";

import moment from "moment";
import { getTrips } from "../api/trips.api";

interface SearchForm {
  fromStation: string;
  toStation: string;
  startTime_gte: string;
}

const SearchDetail = (props: { onSearch: (query: string) => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SearchForm>();

  const onSubmit: SubmitHandler<SearchForm> = async (data) => {
    console.log(data);
    const query = new URLSearchParams(data);
    props.onSearch(query.toString());
    console.log(query.toString());
  };
 
  
  return (
    <div className="fb">
      <form action="" className="fb" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-book">
          <div className="form-delplace">
            <img className="w-7" src="../img/f1.svg" alt="" />
            <span className="">
              <p>Nơi xuất phát</p>
              <div>
                {" "}
                <input
                  required
                  {...register("fromStation")}
                  type="text"
                  style={{
                    width: "120%",
                    border: "1px solid #C7C8CC",
                    borderRadius: "5px",
                    paddingLeft: "15px",
                  }}
                />
              </div>
            </span>
          </div>
          <div className="form-arrivalplace">
            <img src="../img/f2.svg" alt="" />
            <span>
              <p>Nơi đến</p>
              <input
                type="text"
                {...register("toStation")}
                style={{
                  width: "120%",
                  border: "1px solid #C7C8CC",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
              />
            </span>
          </div>
          <div className="form-date">
            <img src="../img/f3.svg" alt="" />
            <span>
              <p>Ngày đi</p>
              <input
                type="datetime-local"
                min={moment().format("YYYY-MM-DD")}
                {...register("startTime_gte")}
                style={{
                  width: "120%",
                  border: "1px solid #C7C8CC",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
               
              />
            </span>
          </div>
          <p className="return-date flex">
            <img
              style={{ paddingRight: "5px" }}
              src="../img/bx-plus-1.svg"
              alt=""
            />
            <p className="text-xs">Thêm ngày về</p>
          </p>
        </div>
        <button type="submit" className="search">
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default SearchDetail;
