import React from "react";
import signupPng from "../assets/picture/test.jpg";
import avaterPho from "../assets/picture/man.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [photo, setPhoto] = useState(avaterPho);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    gender: "",
    role: "User",
  });
  const setButton = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submiteHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-heading text-2xl leading-9 font-bold mb-10">
          Join our fitness community{" "}
          <span className="text-primaryColor">today</span> and start your
          journey to a healthier you! 💪
        </h3>

        <form onSubmit={submiteHandler} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={setButton}
              className="input w-full px-4 py-3 border-b border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 outline-primaryColor"
            />
          </div>
          <div className="mb-5">
            <input
              placeholder="Enter your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={setButton}
              className="input w-full px-4 py-3 border-b border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 outline-primaryColor"
            />
          </div>
          <div className="mb-5">
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={setButton}
              className="input w-full px-4 py-3 border-b border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 outline-primaryColor"
            />
          </div>

          <div className="mb-5 flex items-center  justify-between">
            <label
              htmlFor=""
              className="text-heading font-bold text-base leading-7"
            >
              Are you a:
              <select
                onChange={setButton}
                className="select select-bordered w-full max-w-xs"
              >
                <option>COACH</option>
                <option>USER</option>
              </select>
            </label>
            <label
              htmlFor=""
              className="text-heading font-bold text-base leading-7"
            >
              Gender:
              <select
                onChange={setButton}
                className="select select-bordered w-full max-w-xs"
              >
                <option>MALE</option>
                <option>FEMALE</option>
              </select>
            </label>
          </div>
          <div className="mb-5 flex items-center gap-3">
            <div className=" rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              {photo && (
                <img
                  src={photo}
                  className="w-[60px] h-[60px] rounded-full "
                  alt="Avatar"
                />
              )}
            </div>
            <div>
              <input
                onChange={handleChange}
                type="file"
                name="photo"
                id="customFile"
                accept=".jpg, .png "
              />
            </div>
          </div>
          <div className="mt-7">
            <button type="submit" className="btn hover:bg-primaryColor w-full">
              Register
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Already have an account?
            <Link className=" text-blue-600 font-medium ml-1" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
