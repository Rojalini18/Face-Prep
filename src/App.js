import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Login />} />
          <Route exact path={"/home"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
