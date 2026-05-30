import "./ExpenseForm.css"
import { useContext, createContext, useState, useEffect} from "react"
// component

    export default function ExpenseForm() {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")

        function handleClick() {

        e.prevenDefault();

        const newExpense = {
            title,
            value,
            category,
            date
        };

    }
    
    return(
        <>
        <form className="input-form">
            <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />

            <input type="number" value={value} placeholder="Expense Value" onChange={(e) => setValue(e.target.value)} />

            <input type="text" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)} />

            <input type="date" value={date} placeholder="date" onChange={(e) => setDate(e.target.value)} />

            <form className="add-button" onSubmit={ handleClick }>Add</form>
        </form>
        </>

    );

    
}

