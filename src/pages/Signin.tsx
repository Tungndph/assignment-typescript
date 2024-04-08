import axios from "axios";

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces";
import Swal from "sweetalert2";
const Signin: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit = (data: IUser) => {
    // Thực hiện xử lý đăng nhập ở đây, ví dụ kiểm tra tên người dùng và mật khẩu
    if (data.email === "admin@gmail.com" && data.password === "123456") {
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true, // Tự động đóng sau 1.5 giây
      }).then(() => {
        // Chuyển hướng đến trang admin
        navigate("/admin");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Thông tin tài khoản hoặc mật khẩu không chính xác",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true, // Tự động đóng sau 1.5 giây
      });
    }
  };
  return (
    <div
      className="mt-5 container w-[800px] py-2.5 rounded-2xl"
      style={{ background: "#FDF0D1" }}
    >
      <h2 className="text-center text-2xl">Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-5">
        <div className="mb-3">
          <label className="block text-gray-700">Tên đăng nhập</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Email"
          />
          {errors.email && errors.email.type === "required" && (
            <div className="mt-2  text-red-600 text-sm form-text text-danger">
              Bắt buộc phải nhập
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="block text-gray-700">Mật khẩu</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Password"
          />
          {errors.password && errors.password.type === "required" && (
            <div className="mt-2 text-red-600 text-sm form-text text-danger">
              Bắt buộc phải nhập
            </div>
          )}
        </div>
        <div className="text-center">
          <button
            style={{ width: 150 }}
            className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
