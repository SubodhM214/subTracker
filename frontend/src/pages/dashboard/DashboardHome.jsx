import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import InfoCard from "../../components/dashboard/InfoCard";
import SubscriptionList from "../../components/dashboard/SubscriptionList";
import SpendingCharts from "../../components/dashboard/SpendingCharts";
import { API_PATHS } from "../../components/utils/apiPaths";
import axiosInstance from "../../components/utils/axiosInstance";
import { UserContext } from "../../context/userContext";

const DashboardHome = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);
  console.log(user);
  const getSubscription = async (userId) => {
    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.get(
        API_PATHS.SUBSCRIPTION.GET_ALL(userId)
      );

      const subscriptionList = response.data.data || [];

      if (subscriptionList.length === 0) {
        setError("No subscription data found");
      }

      setSubscriptions(subscriptionList);
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?._id) {
      console.log("Fetching subscriptions for user:", user._id);
      getSubscription(user._id);
    } else {
      setLoading(false);
    }
  }, [user]);

  const data = {
    total: subscriptions.length,
    spending: subscriptions.reduce((acc, s) => acc + (s.amount || 0), 0),
    upcoming: subscriptions.filter(
      (s) => s.dueDate && new Date(s.dueDate) > new Date()
    ).length,
  };

  const spendingData = subscriptions.map((s, idx) => ({
    month: s.month || `Month-${idx + 1}`,
    spending: s.amount || 0,
  }));

  return (
    <DashboardLayout>
      {loading ? (
        <div className="text-center py-6">Loading...</div>
      ) : (
        <>
          <InfoCard data={data} />

          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SubscriptionList subscriptions={subscriptions} />

            <div className="bg-gray-100 text-black rounded-xl p-6 shadow">
              Upcoming Payments
            </div>
          </div>

          <SpendingCharts spendingData={spendingData} />
        </>
      )}
    </DashboardLayout>
  );
};

export default DashboardHome;
