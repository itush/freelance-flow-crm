// src/components/basic/LoginPage.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { account, ID } from "@/app/appwrite";
import AuthForm from "./AuthForm";
import { ToggleAuthPrompt } from "./ToggleAuthPrompt";
import { useAuth } from "@/lib/AuthContext";

// Define a custom type for Appwrite user
interface AppwriteUser {
  $id: string;
  name: string;
  email: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<AppwriteUser | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useAuth();

  const onLogin = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = (await account.get()) as AppwriteUser;
      setLoggedInUser(user);
      // Set cookie for middleware protection
      document.cookie = `ft_token=${user.$id};path=/;`;
      setErrorMessage("");
      setUser(user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Failed to login. Please check your credentials and try again." + error);
    }
  };

  const onRegister = async (name: string, email: string, password: string) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await onLogin(email, password);
      setErrorMessage("");
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Failed to register. Please try again.");
    }
  };

  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
    setErrorMessage("");
  };

  if (loggedInUser) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="mb-4">Logged in as {loggedInUser.name}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <p className="mb-4 text-xl font-semibold">
        {isRegistering ? "Register an Account" : "Please Login"}
      </p>
      <AuthForm
        isRegistering={isRegistering}
        onLogin={onLogin}
        onRegister={onRegister}
        errorMessage={errorMessage}
      />
      <ToggleAuthPrompt isRegistering={isRegistering} toggleMode={toggleMode} />
    </div>
  );
}
