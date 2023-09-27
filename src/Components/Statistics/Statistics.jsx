import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { getStoredDonationCard } from "../Utility/localStorage";

const colors = ["#FF444A", "#00C49F"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white" // Fixed fill color
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const Statistics = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const storedDataIds = getStoredDonationCard();
    const donationCards = [];

    const filterData = donationCards.filter((card) =>
      storedDataIds.includes(card.id)
    );

    const totalDonation = filterData.length;
    const yourDonation = storedDataIds.length;

    const data = [
      { name: "Total Donation", value: 12 },
      { name: "your donation", value: yourDonation },
    ];
    setData(data);
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={Data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#FF444A"
            dataKey="value"
          >
            {Data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default Statistics;
