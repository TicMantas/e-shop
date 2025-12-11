type ModalFooterProps = {
  agree: () => void;
  agreeText: string;
  close?: () => void;
  closeText?: string;
};

const ModalFooter = ({
  agree,
  agreeText,
  close,
  closeText,
}: ModalFooterProps) => {
  const closeButton = (text: string | undefined) => {
    if (text) {
      return (
        <button
          className="py-1 px-10 rounded-xl  text-lg font-semibold bg-gray-400"
          onClick={close}
        >
          {text}
        </button>
      );
    } else return null;
  };
  return (
    <div className="relative flex items-center justify-center gap-3 p-2 bg-gray-300 rounded-b-4xl [&_button]:cursor-pointer">
      <button
        onClick={agree}
        className="py-1 px-10 rounded-xl  text-lg font-semibold bg-gray-400"
      >
        {agreeText}
      </button>
      {closeButton(closeText)}
    </div>
  );
};

export default ModalFooter;
