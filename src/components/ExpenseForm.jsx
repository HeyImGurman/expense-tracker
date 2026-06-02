import "./ExpenseForm.css";

import { useState } from "react";

import { useExpenses } from "./ExpenseContext";

export default function ExpenseForm() {

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const [show, setShow] = useState(false)

    const { addExpense } = useExpenses();

    function handleClick(e) {

        e.preventDefault();

        const newExpense = {
            title,
            value,
            category,
            date
        };

        addExpense(newExpense);

        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 2000);

        
    }

    return (
        <>
            {show && ( 
            <div className="indicator-box">
                <p>Expense was added to your list successfully!</p>
            </div>)}
          
            <form className="input-form" onSubmit={handleClick}>

                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    required
                />

                <input
                    type="number"
                    value={value}
                    placeholder="Expense Value"
                    onChange={(e) =>
                        setValue(e.target.value)
                    }
                    required
                />

                <select className="dropdown-category" required value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>--Select Category--</option>
                    <option value="Food">Food</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Others">Others</option>
                </select>

                <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                        setDate(e.target.value)
                    }
                    required
                />

                <button
                    className="add-button"
                    type="submit"
                >
                    Add
                </button>

            </form>
        </>
    );
}   