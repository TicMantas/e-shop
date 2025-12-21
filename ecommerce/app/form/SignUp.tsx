"use client";
import Input from "@/components/Input";
import Modal from "../modal/Modal";
import ModalBody from "../modal/ModalBody";
import ModalFooter from "../modal/ModalFooter";
import ModalHeader from "../modal/ModalHeader";

type SignUpProps = {
  mode: string;
  email: string;
  password: string;
  status: string;
  setMode: () => void;
  onSubmit: () => void;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  closeSignUp: () => void;
};

const SignUp = ({
  mode,
  email,
  status,
  password,
  onSubmit,
  setEmail,
  setPassword,
  setMode,
  closeSignUp,
}: SignUpProps) => {
  const inputClass = "shadow-md rounded-xl text-center p-2 w-full flex-5";

  return (
    <Modal>
      <ModalHeader title={mode} />
      <ModalBody>
        <div className="flex flex-col w-full">
          <form
            onSubmit={onSubmit}
            className="rounded-4xl flex flex-col p-5 flex-1 m-2 items-center justify-center"
          >
            <Input
              placeholder={"Enter your email"}
              type={"email"}
              title={"Email"}
              name={"email"}
              value={email}
              onChange={setEmail}
              additionalClass={inputClass}
              required
            />
            <Input
              placeholder={"Enter your password"}
              type={"password"}
              title={"Password"}
              name={"password"}
              value={password}
              onChange={setPassword}
              additionalClass={inputClass}
              required
            />
            <button
              type="submit"
              className="bg-gray-400 p-2 mt-4 text-white rounded-xl w-full foot-bold text-xl cursor-pointer hover:scale-102 hover:duration-700"
            >
              Register
            </button>
          </form>
          <div className="flex flex-col items-center gap-1 my-2 flex-1">
            <p>Already have an account </p>
            <button
              onClick={() => {
                setMode();
              }}
              className={
                "text-blue-600 border-b-2 border-transparent hover:border-blue-800 hover:text-blue-800 duration-700 cursor-pointer"
              }
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-lg text-center">{status}</p>
          </div>
        </div>
      </ModalBody>
      <ModalFooter agree={closeSignUp} agreeText={"Close"} />
    </Modal>
  );
};

export default SignUp;
