import React from "react";

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div className="bg-gray-100 text-black rounded-xl p-6 shadow">
      <div className="flex justify-between">
        <p className="text-2xl">Subscriptions</p>
        <button className="cursor-pointer hover:bg-black hover:text-white px-2 py-1 rounded-sm mb-2 transition">
          View All
        </button>
      </div>
      <ul className="space-y-3">
        {subscriptions.length > 0 ? (
          subscriptions.slice(0, 4).map((sub) => (
            <li
              key={sub.id || sub._id} // ✅ use unique id instead of index
              className="flex justify-between items-center border-b-0 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="font-medium">{sub.name || sub.serviceName}</p>
                <p className="text-sm text-gray-500">
                  {sub.frequency || sub.plan || "N/A"}
                </p>
              </div>
              <span className="font-semibold">
                ₹{sub.amount || sub.price || 0}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No subscriptions found</p>
        )}
      </ul>
    </div>
  );
};

export default SubscriptionList;
