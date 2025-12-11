import React from "react";

type ModalProps = {
  children: React.ReactNode;
  additionaClass?: string;
};

const Modal = ({ children, additionaClass }: ModalProps) => {
  const classes = {};
  return (
    <div
      className={`${
        !additionaClass
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          : additionaClass
      }`}
    >
      <div className="w-full max-w-lg bg-white dark:bg-gray-200 dark:text-black rounded-4xl shadow-xl ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
