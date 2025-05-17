
"use client";

import React from "react";

export default function ActionButtons() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 cursor-pointer">
        Create New Project
      </button>
      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer">
        New Client
      </button>
    </div>
  );
}
