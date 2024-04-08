import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces";

interface FormData {
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const { data: responseData } = await axios.post<IUser>(
        `http://localhost:3000/signup`,
        data
      );
      console.log(data);
      alert("Đăng kí thành công");
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="container">
      <h2>Đăng kí</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên đăng nhập</label> <br></br>
          <input
            type="email"
            {...register("email", { required: true })}
            className="border-2"
            placeholder="Email"
          />
          {errors.email && errors.email.type === "required" && (
            <div className="form-text text-danger">Bắt buộc phải nhập</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Mật khẩu</label>
          <br></br>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && errors.password.type === "required" && (
            <div className="form-text text-danger">Bắt buộc phải nhập</div>
          )}
        </div>
        <button style={{ width: "150px" }} className="btn btn-primary">
          Đăng kí
        </button>
      </form>
    </div>
  );
};

export default Signup;
