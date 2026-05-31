import {
   createContext,
   useContext,
   useState
} from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {

   const [expenses, setExpenses] = useState([]);

   const addExpense = (expense) => {

      console.log("ADDING:", expense);

      setExpenses((prev) => [
         ...prev,
         expense
      ]);
   };

   return (

      <ExpenseContext.Provider
         value={{ expenses, addExpense }}
      >

         {children}

      </ExpenseContext.Provider>

   );
}

export const useExpenses = () =>
   useContext(ExpenseContext);