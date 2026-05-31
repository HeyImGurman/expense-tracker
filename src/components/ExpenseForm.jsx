import "./ExpenseForm.css";

import { useState } from "react";

import { useExpenses } from "./ExpenseContext";

export default function ExpenseForm() {

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const { addExpense } = useExpenses();

    function handleClick(e) {

        e.preventDefault();

        const newExpense = {
            title,
            value,
            category,
            date
        };

        console.log("FORM SUBMITTED");

        addExpense(newExpense);

        console.log(newExpense);
    }

    return (
        <>
            <form className="input-form">

                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <input
                    type="number"
                    value={value}
                    placeholder="Expense Value"
                    onChange={(e) =>
                        setValue(e.target.value)
                    }
                />

                <input
                    type="text"
                    value={category}
                    placeholder="Category"
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                        setDate(e.target.value)
                    }
                />

                <button
                    className="add-button"
                    onClick={handleClick}
                >
                    Add
                </button>

            </form>
        </>
    );
}   