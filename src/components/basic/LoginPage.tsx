// src/components/basic/LoginPage.tsx
"use client";
import { useState } from "react";
import { account, ID } from "@/app/appwrite";

interface AppwriteUser {
  $id: string;
  name: string;
  email: string;
  // Add any additional properties as needed.
}
const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<AppwriteUser | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Validate email using a simple regex.
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  // Password must be between 8 and 10 characters.
  const isPasswordValid = password.length >= 8 && password.length <= 10;
  // For registration, name must be between 4 and 8 characters; login doesn't require name.
  const isNameValid = isRegistering ? (name.length >= 4 && name.length <= 8) : true;
  
  // Overall form validity based on the current mode.
  const isFormValid = isRegistering
    ? isNameValid && isEmailValid && isPasswordValid
    : isEmailValid && isPasswordValid;

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(`Login failed. Please try again. ${error}`);
    }
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), email, password, name);
      login(email, password);
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Registration failed. Please try again." + error);

    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setLoggedInUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loggedInUser) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="mb-4">Logged in as {loggedInUser.name}</p>
        <button
          type="button"
          className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="mb-4">{isRegistering ? "Register an Account" : "Please Login to Continue"}</p>
      <form className="flex flex-col gap-4 w-80">
        {isRegistering && (
          <input
            type="text"
            placeholder="Name"
            className="px-3 py-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!isRegistering ? (
          <button
            type="button"
            disabled={!isFormValid}
            // className="px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer"
             className={`px-4 py-2 rounded ${
              isFormValid
                ? "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            onClick={() => login(email, password)}
          >
            Login
          </button>
        ) : (
          <button
            type="button"
             disabled={!isFormValid}
            className={`px-4 py-2 rounded ${
              isFormValid
                ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            onClick={register}
          >
            Register
          </button>
        )}

        {errorMessage && (
          <p className="text-red-600 text-center text-xs">{errorMessage}</p>
        )}
      </form>
      <div className="mt-4">
        {!isRegistering ? (
          <p>
            Don`t have an account?{" "}
            <button
              onClick={() => {
                setIsRegistering(true);
                setErrorMessage("");
              }}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Register
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button
              onClick={() => {
                setIsRegistering(false);
                setErrorMessage("");
              }}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
