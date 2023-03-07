import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/product/categories" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
