"use client";
import Input from "@/components/Input";
import { BsHouse } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

const Contacts = () => {
  return (
    <main className="flex md:flex-row md:justify-center md:items-center flex-col m-10">
      <section className="gap-10 flex flex-1 flex-col m-2 p-3 items-center justify-center">
        <p className="text-6xl font-extrabold tracking-widest">Contact us</p>
        <p className="text-md text-gray-400 text-center">
          We are commited to processing the information in order to contact you
          and talk about your choice of products
        </p>

        <div className="flex flex-col items-center list-none m-3">
          <ul className="flex flex-col gap-4 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
            <li>
              <MdEmail color="gray" size={25} /> example@gmail.com
            </li>
            <li>
              <BsHouse color="gray" size={25} />
              King Street Manchester M2 4WU
            </li>

            <li>
              <PiPhone color="gray" size={25} /> +4472225319
            </li>
          </ul>
        </div>
      </section>
      <form className="rounded-4xl flex flex-col flex-1 m-2 p-10 items-center justify-center shadow-xl">
        <Input placeholder={""} type={"text"} title={"Name"} name={"name"} />
        <Input
          placeholder={""}
          type={"text"}
          title={"Last name"}
          name={"lastName"}
        />
        <Input
          placeholder={""}
          type={"number"}
          title={"Phone nr."}
          name={"phone"}
        />
        <Input placeholder={""} type={""} title={"Email"} name={"email"} />
        <div className="flex justify-end mt-3 gap-4 items-center w-full">
          <p className="flex-2 tracking-widest font-semibold text-xl">
            Your message:
          </p>
          <textarea
            className="border rounded-xl text-center p-2 w-full flex-5"
            placeholder={""}
            name={"message"}
          />
        </div>
        <button className="rounded-2xl bg-gray-400 text-white hover:scale-103 p-1 mt-10 font-semibold text-2xl duration-700 hover:bg-gray-400/30 hover:text-white w-full">
          Submit
        </button>
      </form>
    </main>
  );
};
export default Contacts;
