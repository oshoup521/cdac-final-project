import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
  return <div className="App">
    <Header />
    <Routes>
      <Route  path="about" element={<AboutUs/>}></Route>
    </Routes>
    <Footer/>
  </div>;
}

export default App;
