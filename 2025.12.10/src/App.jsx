import './App.css'
import {BrowserRouter,Routes,Route} from "react-router";
import Home from "./Home.jsx";
import Kontakt from "./Kontakt.jsx";
import Onas from "./Onas.jsx";

function App() {


  return (
    <>
        <h1>Witaj na stronie</h1>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/onas" element={<Onas/>}></Route>
              <Route path="/kontakt" element={<Kontakt/>}></Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
