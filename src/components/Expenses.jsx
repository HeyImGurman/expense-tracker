import "./Expenses.css"
import { useExpenses } from "./ExpenseContext";


export default function Expenses() {
    
    const { expenses } = useExpenses();

    console.log(expenses);

    const total = expenses.reduce((sum, expense) => {
    return sum + Number(expense.value);
    }, 0);

    return(
        <>
        <div className="table-heading">
        <h1>Expenses List</h1>
        <select>
            <option disabled>--Filter Category--</option>
            <option>Food</option>
            <option>Clothes</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Others</option>
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

                    {expenses.map((expense, index) => (

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