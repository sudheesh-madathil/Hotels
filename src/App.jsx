import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Home.css";
import "./secondpage.css"
import { Home } from "./Home";

import { Contact } from "./Contact";
import { Login } from "./Login";
import { About } from "./About";
import { Secondpage } from "./secondpage";
import { Hotel } from "./Hotel";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/Secondpage" element={<Secondpage />} />
        <Route path="/Hotel" element={<Hotel />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
