import React from "react";
import { Link } from "react-router-dom";
import forgotpassword from "../../images/forgotpassword.png";
import back from "../../images/back.svg";

function ChangePassword() {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <section className="  flex flex-col justify-center items-center gap-5 px-4 py-8 rounded-lg">
        <img className="w-[50px] md:w-[70px]" src={forgotpassword} alt="" />
        <div className="flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-2xl font-bold">CREATE NEW PASSWORD</h1>
          <p className="text-sm font-extralight text-[#707070]">
            Verified! Enter your new credentials
          </p>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="pass" className="font-medium text-sm">
            NEW PASSWORD
          </label>
          <input
            className="text-sm border-[1px] border-[#707070] p-2 rounded"
            type="passsword"
            placeholder="Enter new password"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="cpass" className="font-medium text-sm">
            CONFIRM PASSWORD
          </label>
          <input
            className="text-sm border-[1px] border-[#707070] p-2 rounded"
            type="password"
            placeholder="Re-enter password"
          />
        </div>
        <Link
          to="/"
          className="w-full h-[40px] bg-[#0894DE] hover:bg-[#007abc] text-white flex justify-center items-center"
        >
          Change Password
        </Link>
        <Link to="/admin-login">
          <div className="flex gap-2">
            {" "}
            <img className="w-[15px]" src={back} alt="" />
            <p>Back to Login</p>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default ChangePassword;