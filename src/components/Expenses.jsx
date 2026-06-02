import "./Expenses.css"
import { useExpenses } from "./ExpenseContext";
import { useState } from "react";



export default function Expenses() {
    
    const { expenses } = useExpenses();
    const [category , setCategory] = useState("All")

    console.log(expenses);

    const total = expenses.reduce((sum, expense) => {
    return sum + Number(expense.value);
    }, 0);

   const filteredExpenses = expenses.filter((expense) => {

    if (category === "All") {
        return true;
    }

    return expense.category === category;
    });

    return(
        <>
        <div className="table-heading">
        <h1>Expenses List</h1>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
        </select>

        <p className="total">Total Expenditure : <span className="red-text">${total}</span></p>
        </div>

        <table className="expense-table">
            
            <thead>
                <tr>
                <th scope="column">Name</th>
                <th scope="column">Value</th>
                <th scope="column">Category</th>
                <th scope="column">Date</th>
                </tr>
            </thead>

            <tbody>

                    {filteredExpenses.map((expense, index) => (

                        <tr key={index}>

                            <td>{expense.title}</td>

                            <td>{expense.value}</td>

                            <td>{expense.category}</td>

                            <td>{expense.date}</td>

                        </tr>

                    ))}

                </tbody>

        </table>
        </>
    );

}