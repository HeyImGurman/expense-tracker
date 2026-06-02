import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import { useExpenses } from "./ExpenseContext";

export default function Graph() {

    const { expenses } = useExpenses();

    // convert expenses into chart format
    const chartData = expenses.map((expense) => {

        return {
            name: expense.title,
            value: Number(expense.value),
        };

    });

    return (

        <ResponsiveContainer
            width="100%"
            height={400}
            className="container"
        >

            <LineChart
                className="graph"
                data={chartData}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                />

            </LineChart>

        </ResponsiveContainer>

    );
}