import { Link, Route, Routes } from "react-router-dom";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="p-4">
            <p>Welcome to Home page</p>
            <p>
              Navigate to the{" "}
              <Link to={"/dashboard"} className="text-blue-500 underline">
                Dashboard
              </Link>
            </p>
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="p-4">
            <p>Page Not Found</p>
            <p>
              Back to the{" "}
              <Link to={"/"} className="text-blue-500 underline">
                Home Page
              </Link>
            </p>
          </div>
        }
      />
    </Routes>
  );
};

export default HomeRoutes;
