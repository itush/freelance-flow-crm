
"use client";

import React from "react";

export default function RecentActivity() {
  const activities = [
    "12:30 PM – Invoice #124 sent to Acme Corp",
    '11:00 AM – New project "Website Redesign" created',
    "10:15 AM – Follow-up email scheduled for Client X",
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
      <div className=" border rounded p-4 space-y-2">
        {activities.map((activity, idx) => (
          <p key={idx} className="text-sm text-gray-700">
            • {activity}
          </p>
        ))}
      </div>
    </div>
  );
}
