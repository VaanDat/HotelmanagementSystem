import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [Gmail, setUserEmail] = useState("");
  const [Password, setUserPassword] = useState("");
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");

  const reg = async () => {
    let info = {
      Firstname,
      Lastname,
      Gmail,
      Password,
    };
    console.log(info);
    await axios.post("http://localhost:5000/register", info).then((res) => {
      console.log(res);
      window.open("http://localhost:3000/login", "_self");
    });
  };

  return (
    <div className="font-sans antialiased flex h-screen w-full items-center justify-center bg-emerald-800 ">
      <div className="w-full pt-[4rem]">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto rounded-xl bg-white text-gray-700 px-16 py-10 shadow-lg  max-sm:px-8 flex justify-center">
            <div className="pr-8 flex items-center text-green-800 text-[2rem] border-grey-lighter font-delafield">
              AnhemHotel
            </div>
            {/* Registration */}
            <div className="py-5 px-5 ">
              <div className="flex mb-4">
                <div className="w-1/2 mr-1 text-sm">
                  <label
                    className="block text-grey-darker text-sm  mb-2 text-gray-700"
                    for="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="first_name"
                    type="text"
                    placeholder="First name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="w-1/2 ml-1 text-sm">
                  <label
                    className="block text-grey-darker text-sm  mb-2 text-gray-700"
                    for="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="last_name"
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm  mb-2 text-gray-700"
                  for="email"
                >
                  Email{" "}
                </label>
                <input
                  className="bg-gray-200 appearance-none border text-sm rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm  mb-2  text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="bg-gray-200 appearance-none border text-sm rounded w-full py-2 px-3 text-grey-darker"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center justify-between mt-8">
                <div
                  className="flex flex-col translate-x-[7rem] translate-y-[-10px] bg-blue hover:bg-blue-dark text-gray-700  px-4 rounded-full"
                  type="submit"
                >
                  <button
                    onClick={reg}
                    className="w-24 my-5 py-2 bg-green-800  hover:shadow-lg  text-white  rounded-lg"
                  >
                    Sign up
                  </button>
                </div>
                <div className="flex translate-x-[-5rem] translate-y-12  text-white text-xs ">
                  <p className=" text-slate-400 mr-1">
                    Already have an account?
                  </p>
                  <Link to={"/login"}>
                    <button className="text-gray-700 hover:underline">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
