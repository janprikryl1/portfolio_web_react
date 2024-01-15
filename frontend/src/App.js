import React, {useEffect, useState} from "react";
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Index from "./pages";
import NoPage from "./pages/NoPage";
import Send_message from "./pages/Send_message";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetail from "./components/ProjectDetail";

import { createGlobalStyle } from 'styled-components';

import "./i18n";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
    @media (prefers-color-scheme: dark) {
         body {
          margin: 0;
          padding-bottom: 0%;
          font-family: 'Ubuntu', Arial;
        }
    }
    @media (prefers-color-scheme: dark) {
        a, h1, h2, h3, h4, p, li, label {
            color: white;
        }
        html {
            background-color: #000;
            padding-bottom: 3rem;
            margin: 0;
            padding-bottom: 0%;
            font-family: 'Ubuntu';
        }
        #app, #formMessage {
            background-color: #000;
        }
        input[type=text], input[type=email], textarea {
            width: 200px;
            background: black;
            color: white;
            transition: width 0.4s ease-in-out;
        }
        input[type=text]:focus, input[type=email]:focus, textarea:focus {
            width: 100%;
            background: black;
            color: white;
        }
        .featurette-divider {
            color: white;
            width: 75%;
        }
    }
    .footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        margin-top: 50px;
        text-align: right;
    }
    .arrow:hover {
        transform: scale(1.5) rotate(0deg);
    }
    .rotated {
        transform: rotate(180deg);
    }
    .rotated:hover {
        transform: rotate(180deg) scale(1.5);
    }
`;

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header/>
            <div className='conainer'>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Send_message />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:ProjectId" element={<ProjectDetail />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </div>
          <ToastContainer />
          <Footer />
      </BrowserRouter>
  );
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);