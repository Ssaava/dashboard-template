import MainLayout from "@/layouts/main-layout";
import { Link, Route, Routes } from "react-router-dom";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={
            <div className="p-4">
              <p>Welcome to Dashboard</p>
              <p>
                Back to the{" "}
                <Link to={"/"} className="text-blue-500 underline">
                  Home Page
                </Link>
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
