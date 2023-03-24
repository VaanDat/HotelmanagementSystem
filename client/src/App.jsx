import Axios from "axios";
import { useState, useEffect } from 'react'
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import RoomsPage from "./pages/RoomsPage";
import RoomDetail from "./pages/RoomDetail";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:5000/api')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])

  return (
    data == null ? (

      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<IndexPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/rooms" element={<RoomsPage/>} />
        <Route path="/roomdetail/:id" element={<RoomDetail/>} />
        <Route path="/roomdetail/:id/bookingpage" element={<BookingPage/>} />

      </Routes>








    ) : (
      <div className="App">
        {
          data.map((item) => {
            return (
              <>
                <p>{item.STT}</p>
                <p>{item.Phong}</p>
                <p>{item.Loai_Phong}</p>
              </>
            )
          })
        }
      </div>
    )
  );
}

export default App;
