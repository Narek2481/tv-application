import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/:id" element={<Home/>}/>
        <Route path="*" element={<Navigate to={"/home/1"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
