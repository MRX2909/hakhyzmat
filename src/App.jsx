import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
        <Route path="info" element={<div>info</div>} />
      </Route>
    </Routes>
  );
}

export default App;
