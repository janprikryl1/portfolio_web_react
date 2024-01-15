import React, {useEffect, useState} from "react";
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Index from "./pages";
import NoPage from "./pages/NoPage";
import Cookies from "universal-cookie";
import Send_message from "./pages/Send_message";

function App() {
    //const [cookieShow, setCookieShow] = useState(true);
    //const cookies = new Cookies();

  /*useEffect(() => {
      const CookieModalShow = cookies.get('CookieModalShow');
        if (CookieModalShow != undefined) {
            setCookieShow(CookieModalShow);
        }
  }, []);*/
  // <NavScrollExample setCurrentUser={setCurrentUser} currentUser={currentUser} LoginRegister={LoginRegister} setLoginRegister={setLoginRegister} LoginShow={LoginShow} setLoginShow={setLoginShow} RegisterShow={RegisterShow} setRegisterShow={setRegisterShow}/>
  return (
        <BrowserRouter>

        <div className='conainer'>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Send_message />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      <ToastContainer />
      </BrowserRouter>
  );
}



const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);