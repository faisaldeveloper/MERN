import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Users from "./components/Users";
import About from "./pages/about";

function App() { 
  return (
    <div className="App">
      <Navbar />      
        <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>     
      <hr />
     <Footer />
    </div>
  );
}

export default App;