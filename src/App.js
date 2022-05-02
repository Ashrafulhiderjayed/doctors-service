

import { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/Home/About/About";
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="">
      <Fragment>
        <Header>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          </Routes>
        </Header>
      </Fragment>
    </div>
  );
}

export default App;
