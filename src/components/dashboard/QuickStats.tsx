"use client";

import React from "react";

export default function QuickStats() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-2 text-center">Quick Stats</h2>
      <div className="flex flex-wrap gap-4">
        <StatCard label="Clients" value={32} />
        <StatCard label="Projects" value={14} />
        <StatCard label="Pending Invoices" value={5} />
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: number;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="flex-1 min-w-[150px] border rounded p-4 text-center">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}