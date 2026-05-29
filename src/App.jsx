import Navbar from "./components/navbar";

import Home from "./pages/home";
import AddExpenses from "./pages/AddExpenses";

import { Routes, Route } from "react-router-dom";

export default function App() {

  return (

    <>
      <div className="container">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add"
          element={<AddExpenses />}
        />

        

      </Routes>
      </div>

    </>

  );
}