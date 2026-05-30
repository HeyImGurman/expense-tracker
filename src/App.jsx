import Navbar from "./components/navbar";

import Home from "./pages/home";
import AddExpenses from "./pages/AddExpenses";
import YourExpenses from "./pages/YourExpenses";
import { ExpenseProvider } from "./components/ExpenseContext"

import { Routes, Route } from "react-router-dom";

export default function App() {

  return (

    <ExpenseProvider>
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

        <Route
          path="/expenses"
          element={<YourExpenses />}
        />

      </Routes>
      </div>

    </ExpenseProvider>

  );
}