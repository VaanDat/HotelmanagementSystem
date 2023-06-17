import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export default function LoginPage() {
  const [Gmail, setGmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const Login = async () => {
    let info = {
      Gmail,
      Password,
    };
    console.log(info);
    await Axios.post("http://localhost:5000/login", info).then((res) => {
      if (res.data[0]) {
        let data = JSON.stringify(res.data[0]);
        localStorage.setItem("userAuth", data);
        window.location.href = "/admin";
      } else {
        //notify sai ngu
      }
    });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-emerald-800 ">
      <div className="rounded-xl bg-white px-16 py-10 max-sm:px-8">
        <div className="text-gray-900">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-6xl font-delafield text-green-800">
              Miles
            </h1>
            <span className="">Welcome back!</span>
          </div>
          <div>
            <div className="mb-4">
              <label className="text-sm block text-gray-700">Email</label>
              <input
                className="w-64 text-sm px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-700 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
                name="name"
                placeholder="Enter email address"
                onChange={(e) => {
                  setGmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-4 text-lg">
              <label className="text-sm block text-gray-700">Password</label>
              <input
                className="w-64 text-sm px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-700 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
                name
                type="Password"
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mt-8 flex justify-center text-base text-black">
              <button
                onClick={Login}
                className="w-24 my-5 py-2 bg-green-800  hover:shadow-lg  text-white  rounded-lg"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center ">
              <Link to={"/register"} className="text-xs text-slate-400">
                Don't have account?{" "}
                <button className="hover:underline text-gray-700">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
