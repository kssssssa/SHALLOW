import "./App.css";
import React from "react";
import { Routes, Route} from "react-router-dom";

import Home from "./component/Home";
import Work from "./component/Work";
import Link from "./component/Link";

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/link" element={<Link/>}/>
      </Routes>
      
    </>
  );
};

export default App;
