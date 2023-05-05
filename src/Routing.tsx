import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

const Routing = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositorio/:name" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
