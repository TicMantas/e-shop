import React from "react";
import { IoCloseCircle } from "react-icons/io5";

type ModalHeaderProps = {
  title: string;
};

const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
    <div className="relative flex items-center justify-center p-2 bg-gray-300 rounded-t-4xl">
      <p className="text-2xl font-extrabold">{title}</p>
    </div>
  );
};

export default ModalHeader;
