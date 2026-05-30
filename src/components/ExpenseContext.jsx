import { useContext, createContext, useState} from "react"

const ExpenseContext = createContext();

export function ExpenseProvider( { children } ){
        const [expense, setExpense] = useState([]);

        const addExpense = (expense) => {
            setExpense((prev) => [...prev, expense]);
        }

   return (
      <ExpenseContext.Provider
         value={{ expense, addExpense }}
      >
         {children}
      </ExpenseContext.Provider>
   );
    }

export const useExpenses = () => useContext(ExpenseContext);