"use client";
import { useState, createContext, useContext } from "react";
import Modal from "@/app/modal/Modal";
import ModalBody from "@/app/modal/ModalBody";
import ModalHeader from "@/app/modal/ModalHeader";
import ModalFooter from "@/app/modal/ModalFooter";
import SignUp from "../../form/SignUp";
import Login from "@/app/form/Login";
type ModalContextValue = {
  openSignup: () => void;
  closeSignUp: () => void;
  isSignUpOpen: boolean;
};

const SignupContext = createContext<ModalContextValue | undefined>(undefined);

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openSignup = () => setIsSignUpOpen(true);
  const closeSignUp = () => setIsSignUpOpen(false);

  return (
    <SignupContext.Provider value={{ openSignup, closeSignUp, isSignUpOpen }}>
      {children}
      {isSignUpOpen && (
        <Modal>
          <ModalHeader title="Signup" />
          <ModalBody>
            <div className="flex flex-col w-full">
              <SignUp />
              <div className="flex flex-col items-center gap-1 my-2 flex-1">
                <p>Already have an account </p>
                <button
                  onClick={() => {
                    setIsSignUpOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className={
                    "text-blue-600 border-b-2 border-transparent hover:border-blue-800 hover:text-blue-800 duration-700 cursor-pointer"
                  }
                >
                  Login
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter
            agree={() => {}}
            agreeText={"Sign Up"}
            close={closeSignUp}
            closeText="Close"
          />
        </Modal>
      )}
      {isLoginOpen && (
        <Modal>
          <ModalHeader title="Login" />
          <ModalBody>
            <div className="flex flex-col w-full">
              <Login />
              <div className="flex flex-col items-center gap-1 my-2 flex-1">
                <p>Back to </p>
                <button
                  onClick={() => {
                    setIsLoginOpen(false);
                    setIsSignUpOpen(true);
                  }}
                  className={
                    "text-blue-600 border-b-2 border-transparent hover:border-blue-800 hover:text-blue-800 duration-700 cursor-pointer"
                  }
                >
                  Register
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter
            agree={() => {}}
            agreeText={"Login"}
            close={() => setIsLoginOpen(false)}
            closeText="Close"
          />
        </Modal>
      )}
    </SignupContext.Provider>
  );
};

export const useSignUp = () => {
  const context = useContext(SignupContext);
  if (!context) throw new Error("useSignUp must be used within SignupProvider");
  return context;
};
