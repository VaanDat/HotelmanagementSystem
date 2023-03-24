import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [Gmail, setUserEmail] = useState('')
    const [Password, setUserPassword] = useState('')
    const [Firstname, setFirstName] = useState('')
    const [Lastname, setLastName] = useState('')

    const reg = async () =>{
        let info = {
            Firstname,
            Lastname,
            Gmail,
            Password
        }
        console.log(info)
        await axios.post('http://localhost:5000/register', info)
        .then((res) =>{
            console.log(res)
            window.open("http://localhost:3000/login","_self")
        })
    }

    return (
        <div className="font-sans antialiased flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{
            backgroundImage: `url('/images/loginpage.jpg')`
        }}>


            <div className="w-full pt-[4rem]">
                <div className="container mx-auto py-8">
                    <div className="w-5/6 lg:w-1/2 mx-auto rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex justify-center">
                        <div>
                            <div className="py-4 px-8 text-2xl border-grey-lighter text-white">Register</div>
                            <div className="py-4 my-10 px-8 text-[4rem] border-grey-lighter text-white font-delafield">Miles</div>
                        </div>
                        {/* Registration */}
                        <div className="py-4 px-8 registration">
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2 text-white" for="first_name">First Name</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name"  onChange={(e) => {
                                    setFirstName(e.target.value);
                                }} />
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2 text-white" for="last_name">Last Name</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name"  onChange={(e) => {
                                    setLastName(e.target.value);
                                }} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2 text-white" for="email">Email Address</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" onChange={(e) => {
                                    setUserEmail(e.target.value);
                                }} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2 text-white" for="password">Password</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" onChange={(e) => {
                                    setUserPassword(e.target.value);
                                }} />
                                <p className="text-grey text-xs mt-1 text-white">At least 6 characters</p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <div className="flex flex-col translate-x-[15rem] translate-y-[-8px] bg-blue hover:bg-blue-dark text-white font-bold px-4 rounded-full" type="submit">
                                    <button onClick={reg}>Sign Up</button>
                                </div>
                                <div className="flex translate-x-[-3rem] translate-y-4 mt-8 text-white mt-7">
                                        <p className="text-xs translate-y-1 mr-1 text-slate-500">already have an account?</p>
                                        <Link to = {'/login'}><button className="text-slate-400 hover:underline">Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center my-4">
                        <a href="#" className="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
                    </p>
                </div>
            </div>

        </div>
    )

}