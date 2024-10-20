import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import InfoPage from "./pages/InfoPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<h3 align="center" className="m-3 textz-danger">Beýle sahypa tapylmady!</h3>} />
        <Route path="info" element={<InfoPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="service/:serviceId" element={<ServicePage />} />
      </Route>
    </Routes>
  );
}

export default App;
