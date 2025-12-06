"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { BiBasket, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { menuLinks } from "@/const/menuLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="md:hidden flex justify-end pr-2">
        <BiMenu
          onClick={() => setOpen(!open)}
          className={`text-5xl ${!open ? "block" : "hidden"}`}
        />
      </div>
      <div>
        {open && (
          <div className="relative flex flex-col items-center bg-transperant backdrop-blur-lg h-screen">
            <p className="flex flex-1 text-3xl font-semibold my-5">Menu</p>
            <div className="flex flex-2 text-xl font-semibold tracking-wider flex-col items-center [&_a]:my-5 ">
              {menuLinks.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.route}
                  onClick={() => setOpen(false)}
                >
                  {menu.title}
                </Link>
              ))}
              <button>Sign up</button>
            </div>
            <button
              className="absolute top-0 right-4 text-3xl font-bold"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:flex bg-white items-center justify-between p-1 text-xl font-semibold">
        <div className="flex flex-1 p-1 justify-center">
          <Image
            width={60}
            className="rounded-full"
            src={logo}
            alt={"Logo-image"}
          />
        </div>
        <div className="flex flex-5 justify-between px-2 group [&_a]:cursor-pointer">
          {menuLinks.map((menu) => (
            <Link
              key={menu.id}
              href={menu.route}
              onClick={() => setOpen(false)}
            >
              {menu.title}
            </Link>
          ))}
          <button>Sign up</button>
        </div>
        <div className="flex flex-1 justify-center">
          <button className="text-3xl cursor-pointer">
            <BiBasket />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
