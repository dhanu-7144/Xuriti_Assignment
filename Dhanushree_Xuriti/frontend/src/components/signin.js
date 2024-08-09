import React from "react";
import {useForm} from "react-hook-form";
import toast,{Toaster} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignInForm() {

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      password: data.password,
    };
    await axios
      .post(`http://localhost:4000/user/login`, userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Login Successfull");
          setTimeout(() => {
            navigate("/Completion");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const navigate=useNavigate();

  const {register , handleSubmit} = useForm();
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>LOGIN</h1>
        <input
          type="text"
          {...register("username")} 
          placeholder="Username"
          name="username"
          id="username"
          required="true"
        />
        <input
          type="password"
          {...register("password")} 
          name="password"
          placeholder="Password"
          id="password"
          required="true"
        />
        <button type="submit">Login</button>
      </form>
      <Toaster/>
    </div>
  );
}

export default SignInForm;