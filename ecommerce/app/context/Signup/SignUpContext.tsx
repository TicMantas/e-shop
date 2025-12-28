"use client";
import { useState, createContext, useContext } from "react";
import { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser-clients";
import SignUp from "@/app/form/SignUp";
import Login from "@/app/form/Login";

type EmailPasswordProps = {
  user: User | null;
  children: React.ReactNode;
};

export type Mode = "Register" | "Login";

type ModalContextValue = {
  openSignup: () => void;
  closeSignUp: () => void;
};

const SignupContext = createContext<ModalContextValue | undefined>(undefined);

export const SignUpProvider = ({ children }: EmailPasswordProps) => {
  // sign in  and   sign up  switch
  const [mode, setMode] = useState<Mode | boolean>(false);
  // status of the signs
  const [status, setStatus] = useState("");
  const removeStatus = () => {setStatus("")};
  // formData to send in DB
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //supabase
  const supabase = getSupabaseBrowserClient();
  // modal
  const openSignup = () => {
    setMode("Register");
    removeStatus();
  };
  const closeSignUp = () => {
    setMode(false);
    removeStatus();
    setEmail("");
    setPassword("");
  };

  const handleModeToggle = () => {
    if (mode === "Register") {
      setMode("Login");
      setStatus("");
    } else {
      setMode("Register");
      setStatus("");
    }
  };

async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
  e?.preventDefault();

  const trimmedEmail = email.trim();

  if (mode === "Register") {
    const { data, error } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
    });

    if (error) {
      setStatus(error.message);
      return;
    }

    if (data.user && data.user.identities?.length === 0) {
      setStatus("Email already exists. Please log in instead.");
      return;
    }

    setStatus("Check your inbox to confirm your account ! ");
    return;
  }

  if (mode === "Login") {
    const { error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password,
    });

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Login successfully !");
    }
  }
}
  

  return (
    <SignupContext.Provider value={{ openSignup, closeSignUp }}>
      {children}

      {mode === "Register" && (
    <SignUp
          mode={mode}
          status={status}
          setMode={handleModeToggle}
          onSubmit={handleSubmit}
          email={email}
          setEmail={(e) => setEmail((e as React.ChangeEvent<HTMLInputElement>).target.value)}
          password={password}
          setPassword={(e) => setPassword((e as React.ChangeEvent<HTMLInputElement>).target.value)}
          closeSignUp={closeSignUp}
        />
      )}

      {mode === "Login" && (
        <Login
          status={status}
          mode={mode}
          setMode={handleModeToggle}
          closeLogin={closeSignUp}
          onSubmit={handleSubmit}
          email={email}
          password={password}
          setEmail={(e) => setEmail((e as React.ChangeEvent<HTMLInputElement>).target.value)}
          setPassword={(e) => setPassword((e as React.ChangeEvent<HTMLInputElement>).target.value)}
        />
      )}
    </SignupContext.Provider>
  );
};

export const useSignUp = () => {
  const context = useContext(SignupContext);
  if (!context) throw new Error("useSignUp must be used within SignupProvider");
  return context;
};
