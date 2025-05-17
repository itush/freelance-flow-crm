// src/app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { account } from "@/app/appwrite";
import { useRouter } from "next/navigation";
import QuickStats from "@/components/dashboard/QuickStats";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SummaryGraph from "@/components/dashboard/SummaryGraph";
import ActionButtons from "@/components/dashboard/ActionButtons";

interface AppwriteUser {
  $id: string;
  name: string;
  email: string;
}

export default function DashboardPage() {
  const [loggedInUser, setLoggedInUser] = useState<AppwriteUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch the user on mount
  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await account.get();
        setLoggedInUser(user as AppwriteUser);
      } catch (error) {
        console.error("User fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center min-h-screen">

      <div className="p-6">
        {loggedInUser ? (
          <div className="flex flex-col items-center mt-10">
            <p className="mb-4">Hello {loggedInUser.name}</p>

            <QuickStats />
            <RecentActivity />
            <SummaryGraph />
            <ActionButtons />
          </div>
        ) : (
          // Fallback if no user is found (this could happen if the session expires)
          <div className="text-center mt-10">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p>You are not logged in. Please login to access the dashboard.</p>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => router.push("/")}
            >
              Go to Login
            </button>
          </div>
        )}
      </div>



    </main>
  );
}
