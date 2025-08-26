import React from "react";

const InfoCard = ({ data }) => {
  const cards = [
    { title: "Total Subscriptions", value: data.total },
    { title: "Monthly Spending", value: `₹${data.spending}` },
    { title: "Upcoming Payments", value: data.upcoming },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white shadow rounded-xl p-6 border border-gray-200"
        >
          <h3 className="text-gray-500 text-sm">{card.title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
