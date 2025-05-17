"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,  
} from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

export interface AppwriteUser {
  $id: string;
  name: string;
  email: string;
  // Add any additional properties from Appwrite as needed.
}

interface AuthContextType {
  user: AppwriteUser | null;
  setUser: (user: AppwriteUser | null) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppwriteUser | null>(null);
  const router = useRouter();

  // When the provider mounts, try to fetch the current user.
  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await account.get();
        setUser(currentUser as AppwriteUser);
      } catch (error) {
        // Not logged in or error occurred
        console.error("User fetch error AuthContext:", error);
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      // Optionally clear cookie data as well:
      document.cookie = "ft_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // Redirect the user to the home page
     
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
