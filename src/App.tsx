import { Route, Routes } from "react-router-dom";
import HomeRoutes from "./routes/home-routes";
import DashboardRoutes from "./routes/dashboard-routes";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomeRoutes />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
    </Routes>
  );
}

export default App;
