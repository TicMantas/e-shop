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

export const SignUpProvider = ({ user, children }: EmailPasswordProps) => {
  // sign in  and   sign up  switch
  const [mode, setMode] = useState<Mode | boolean>(false);
  // status of the signs
  const [status, setStatus] = useState("");
  const removeStatus = () => {};
  // formData to send in DB
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //supabase
  const supabase = getSupabaseBrowserClient();
  // modal
  const openSignup = () => setMode("Register");
  const closeSignUp = () => {
    setMode(false);
    removeStatus();
    setEmail("");
    setPassword("");
  };

  //tests
  const handleModeToggle = () => {
    if (mode === "Register") {
      setMode("Login");
      setStatus("");
    } else {
      setMode("Register");
      setStatus("");
    }
  };

  // TCSS class implementation

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    if (mode === "Register") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Check your inbox to confirm your account ! ");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
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
        <Login status={""} setMode={function (): void {
          throw new Error("Function not implemented.");
        } } closeLogin={function (): void {
          throw new Error("Function not implemented.");
        } } onSubmit={function (): void {
          throw new Error("Function not implemented.");
        } }/>
      )}
    </SignupContext.Provider>
  );
};

export const useSignUp = () => {
  const context = useContext(SignupContext);
  if (!context) throw new Error("useSignUp must be used within SignupProvider");
  return context;
};
