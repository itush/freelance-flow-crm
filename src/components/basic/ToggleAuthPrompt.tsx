
export interface ToggleAuthPromptProps {
  isRegistering: boolean;
  toggleMode: () => void;
}

export function ToggleAuthPrompt({ isRegistering, toggleMode }: ToggleAuthPromptProps) {
  return (
    <div className="mt-4">
      {isRegistering ? (
        <p className="text-sm">
          Already have an account?{" "}
          <button
            onClick={toggleMode}
            className="text-indigo-600 hover:underline"
          >
            Login
          </button>
        </p>
      ) : (
        <p className="text-sm">
          Don`t have an account?{" "}
          <button
            onClick={toggleMode}
            className="text-indigo-600 hover:underline"
          >
            Register
          </button>
        </p>
      )}
    </div>
  );
}
