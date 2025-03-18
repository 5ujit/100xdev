import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  const filteredUsers = users.filter(user => {
    if (filter === "high") return user.leadScore >= 80;
    if (filter === "medium") return user.leadScore >= 50 && user.leadScore < 80;
    if (filter === "low") return user.leadScore < 50;
    return true;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Tracking Dashboard</h1>
      
      <div className="mb-4">
        <label className="mr-2">Filter by Lead Score:</label>
        <select className="p-2 border rounded" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="high">High Priority (80+)</option>
          <option value="medium">Medium Priority (50-79)</option>
          <option value="low">Low Priority (0-49)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <div key={user.userId} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{user.email}</h2>
            <p>Lead Score: <span className="font-bold">{user.leadScore}</span></p>
            <ul className="mt-2 text-sm text-gray-600">
              {user.activity.map((event, index) => (
                <li key={index}>✅ {event.event} - {new Date(event.timestamp).toLocaleString()}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
