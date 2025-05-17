// src/components/basic/AuthForm.tsx
"use client";

import { useState } from "react";

export interface AuthFormProps {
  isRegistering: boolean;
  onLogin: (email: string, password: string) => void;
  onRegister: (name: string, email: string, password: string) => void;
  errorMessage: string;
}

export default function AuthForm({
  isRegistering,
  onLogin,
  onRegister,
  errorMessage,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Basic client-side validations
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8 && password.length <= 10;
  const isNameValid = isRegistering ? name.length >= 4 && name.length <= 8 : true;
  const isFormValid = isRegistering
    ? isNameValid && isEmailValid && isPasswordValid
    : isEmailValid && isPasswordValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    if (isRegistering) {
      onRegister(name, email, password);
    } else {
      onLogin(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
      {isRegistering && (
        <input
          type="text"
          placeholder="Name"
          className="px-3 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        className="px-3 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="px-3 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        disabled={!isFormValid}
        className={`px-4 py-2 rounded ${
          isFormValid
            ? isRegistering
              ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
              : "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        {isRegistering ? "Register" : "Login"}
      </button>
      {errorMessage && (
        <p className="text-red-600 text-center text-sm">{errorMessage}</p>
      )}
    </form>
  );
}
