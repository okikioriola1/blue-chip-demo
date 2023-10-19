import * as React from "react";


import { Route, Routes } from "react-router-dom";
import CreateTicket from "./pages/createTicket/index";
import Home from './pages/home/index'
import SignUp from "./pages/signUp/index";

function App() {
  

  return (
    <>
    <div className="app">
    <Routes>
					<Route path="/" element={<SignUp />} />
					<Route path="/dashboard" element={<Home />} />
					<Route path="/createTicket" element={<CreateTicket />} />
      </Routes>

    </div>
    <div className="mobile">
        <h1>View on desktop screens</h1>
      </div>

    </>
  )
}

export default App
