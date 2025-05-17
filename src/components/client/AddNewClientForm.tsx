// src/components/client/AddNewClientForm.tsx
"use client";

import React, { useState } from "react";

// Define a type for our client data
export interface ClientData {
  clientCode: string;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientNotes: string;
}

interface AddNewClientFormProps {
  onSubmit: (clientData: ClientData) => void;
}

export default function AddNewClientForm({ onSubmit }: AddNewClientFormProps) {
  const [clientCode, setClientCode] = useState("");
  const [clientFirstName, setClientFirstName] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientNotes, setClientNotes] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clientData: ClientData = {
      clientCode,
      clientFirstName,
      clientLastName,
      clientEmail,
      clientNotes,
    };

    onSubmit(clientData);

    // Optionally reset the form
    setClientCode("");
    setClientFirstName("");
    setClientLastName("");
    setClientEmail("");
    setClientNotes("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded shadow-md w-full max-w-md "
    >
      <div>
        <label htmlFor="client-code" className="block text-sm font-medium text-gray-700">
          Client Code
        </label>
        <input
          type="text"
          id="client-code"
          value={clientCode}
          onChange={(e) => setClientCode(e.target.value)}
          placeholder="Enter client code"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="client-first-name" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="client-first-name"
          value={clientFirstName}
          onChange={(e) => setClientFirstName(e.target.value)}
          placeholder="Enter first name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="client-last-name" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="client-last-name"
          value={clientLastName}
          onChange={(e) => setClientLastName(e.target.value)}
          placeholder="Enter last name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="client-email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="client-email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          placeholder="Enter email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="client-notes" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="client-notes"
          value={clientNotes}
          onChange={(e) => setClientNotes(e.target.value)}
          placeholder="Additional notes..."
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Add Client
      </button>
    </form>
  );
}
