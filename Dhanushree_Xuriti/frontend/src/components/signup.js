import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";

function SignUpForm() {

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };
    await axios
      .post(`http://localhost:4000/user/signup`, userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Account created successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const {register , handleSubmit} = useForm();

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>CREATE ACCOUNT</h2>
        <input
          type="text"
          {...register("username")} 
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          type="password"
          {...register("password", { required : true})} 
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          type="password"
          {...register("confirmpassword", { required : true})} 
          name="confirmpassword"
          id="confirmpassword"
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </form>
      <Toaster/>
    </div>
  );
}

export default SignUpForm;