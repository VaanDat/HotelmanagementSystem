import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'
export default function LoginPage() {
    const [Gmail, setGmail] = useState(null)
    const [Password,setPassword] = useState(null)
    const Login = async () => {
        let info = {
            Gmail,
            Password
        }
        console.log(info)
        await Axios.post('http://localhost:5000/login', info)
        .then((res) =>{
            if(res.data[0]){
                let data = JSON.stringify(res.data[0])
                localStorage.setItem('userAuth', data)
                window.location.href = '/admin'
            }
            else {
                //notify sai ngu
            }
        })
    }   
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"  style={{
            backgroundImage: `url('/images/loginpage.jpg')`}} >
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        {/* <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" /> */}
                        <h1 className="mb-2 text-4xl font-delafield">Miles</h1>
                        <span className="text-gray-300">Enter Login Details</span>
                    </div>
                    <div>
                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" onChange={(e) => {
                                    setGmail(e.target.value);
                                }} />
                        </div>

                        <div className="mb-4
                         text-lg">
                            <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" onChange={(e) => {
                                    setPassword(e.target.value);
                                }}/>
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button onClick={Login} className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                        </div>
                        <div className="ml-[100px] mt-8 flex justify cente hover:underline">
                           <Link to = {'/register'}> <button>Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}