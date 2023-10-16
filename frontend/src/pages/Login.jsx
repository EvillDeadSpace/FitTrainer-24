import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const setButton = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className=" text-heading   text-2xl leading-9  font-bold mb-10">
          Hello <span className="text-primaryColor">Welcome</span> back 😊
        </h3>

        <form className="py-4 md:py-0" action="">
          <div className="mb-5">
            <input
              placeholder="Enter Your Email"
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

          <div className="mt-7">
            <button type="submit" className="btn hover:bg-primaryColor w-full">
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?{" "}
            <Link className=" text-blue-600 font-medium ml-1" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
