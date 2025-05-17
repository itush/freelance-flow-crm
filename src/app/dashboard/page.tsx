// src/app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import QuickStats from "@/components/dashboard/QuickStats";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SummaryGraph from "@/components/dashboard/SummaryGraph";
import ActionButtons from "@/components/dashboard/ActionButtons";
import AddNewClientForm, { ClientData } from "@/components/client/AddNewClientForm";
import { createClient } from "@/lib/createClient";



interface AppwriteUser {
  $id: string;
  name: string;
  email: string;
}

export default function DashboardPage() {
  const [loggedInUser, setLoggedInUser] = useState<AppwriteUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAddClientModal, setShowAddClientModal] = useState(false);
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

  // When "New Client" is clicked.
  const handleNewClientClick = () => {
    setShowAddClientModal(true);
  };

  // Close / cancel the modal.
  const handleCloseClientModal = () => {
    setShowAddClientModal(false);
  };

  const handleAddNewClient = async (clientData: ClientData) => {
    // Here you would normally POST/PUT the new client data to your backend.
    try {
      const createdClient = await createClient(clientData);
      console.log("New client added:", createdClient);
      setShowAddClientModal(false);
      // Optionally, update your client list or display a success message.
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen">

      <div className="p-6">
        {loggedInUser ? (
          <div className="flex flex-col items-center mt-10">
            <p className="mb-4">Hello {loggedInUser.name}</p>

            <QuickStats />
            <RecentActivity />
            <SummaryGraph />
            <ActionButtons
              onCreateNewProject={() => console.log("Create new project")}
              onNewClientClick={handleNewClientClick}
            />

            {showAddClientModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="relative  border-2 p-6 rounded shadow-lg w-full max-w-md">
                  <button
                    onClick={handleCloseClientModal}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close Modal"
                  >
                    X
                  </button>
                  <h2 className="text-xl font-semibold mb-4">Add New Client</h2>
                  <AddNewClientForm onSubmit={handleAddNewClient} />
                </div>
              </div>
            )}

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
