import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const SpendingCharts = ({ spendingData }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-6 ">
      <h2 className="text-2xl mb-2">Monthly Spending</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={spendingData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="spending"
            stroke="#000"
            name="Monthly Spending"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingCharts;
