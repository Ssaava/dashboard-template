import MainLayout from "@/layouts/main-layout";
import { Route, Routes } from "react-router-dom";

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<p>Doctor main page</p>} />
      </Route>
    </Routes>
  );
};

export default DoctorRoutes;
