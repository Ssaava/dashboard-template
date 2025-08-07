import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import DoctorRoutes from "./routes/doctor.routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>

      <Route path="/doctor/*" element={<DoctorRoutes />} />
      <Route path="*" element={<p>page not found</p>} />
    </Routes>
  );
}

export default App;
