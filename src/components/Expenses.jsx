import "./Expenses.css"


export default function Expenses() {
    

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

        <p className="total">Total Expenditure :</p>
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
            <tr>
            <th scope="row">MacDonalds</th>
            <td>2000</td>
            <td>Food</td>
            <td>22-12-24</td>
            </tr>
            </tbody>

        </table>
        </>
    );

}