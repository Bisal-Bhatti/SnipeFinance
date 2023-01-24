// import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import DashboardContent from "./components/DashboardContent";
import Keyword from "./components/Keyword";
import LoginForm from "./components/forms/login";
import Addfee from "./components/AddFee/Addfee";
import FeeDetail from "./components/FeeDetail/FeeDetail";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Dashboard>
              <DashboardContent />
            </Dashboard>
          }
        />
        <Route
          path="/keywords"
          element={
            <Dashboard>
              <Keyword />
            </Dashboard>
          }
        />
        <Route
          path="/Addfee"
          element={
            <Dashboard>
              <Addfee />
            </Dashboard>
          }
        />
        <Route
          path="/FeeDetail"
          element={
            <Dashboard>
              <FeeDetail />
            </Dashboard>
          }
        />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
