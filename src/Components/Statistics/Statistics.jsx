import { useEffect, useState } from "react";
import { Cell, Label, Legend, Pie, PieChart } from "recharts";
import { getStoredDonationCard } from "../../Utility/localStorage";

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
  const colors = ["#FF444A", "#00C49F"];
  return (
    <div className="container mx-auto">
      <PieChart width={900} height={400}>
        <Pie
          data={Data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          fill="#00C49F"
          label
        >
          {/* {Data.map((parameter, index) => (
            <Label
              key={`label-${index}`}
              value={`${((parameter.value / 12) * 100).toFixed(2)}%`}
              fill="#FFFFFF"
              fontSize={20}
            />
          ))} */}

          {Data.map((parameter, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
