import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar/>
      <div className="xl:col-span-5">
      <Header/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
    </div>
    </div>
  )
}

export default App
