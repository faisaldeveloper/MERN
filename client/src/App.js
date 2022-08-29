import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HeaderCarousel from "./components/carousel";
import Footer from "./components/footer";
import Users from "./components/Users";
import RemoteUsers from "./components/RemoteUsers";
import About from "./pages/about";

function App() { 
  return (
    <div className="App">
      <Navbar />
      <HeaderCarousel /> 
        <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/remote-users" element={<RemoteUsers />} />
        <Route path="/about" element={<About />} />
      </Routes>     
      <hr />
     <Footer />
    </div>
  );
}

export default App;