import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import moment from "moment";

type SearchForm = {
  fromStation: string;
  toStation: string;
  startTime_glt: string;
};

const Search = (props: { onSearch: (query: string) => void }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SearchForm>();

  const onSubmit: SubmitHandler<SearchForm> = (data) => {
    const query = new URLSearchParams(data);
    props.onSearch(query.toString());
  };
  return (
    <div>
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
                    borderRadius: "10px",
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
                  borderRadius: "10px",
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
                {...register("startTime_glt")}
                defaultValue={moment().format("YYYY-MM-DD")}
                style={{
                  width: "120%",
                  border: "1px solid #C7C8CC",
                  borderRadius: "10px",
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
            Thêm ngày về
          </p>
        </div>
        <button type="submit" className="search">
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default Search;
