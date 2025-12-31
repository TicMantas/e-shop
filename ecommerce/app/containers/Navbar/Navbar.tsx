"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { BiBasket, BiHeart, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { menuLinks } from "@/const/menuLink";
import { useTheme } from "@/components/ThemeProvider";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useSignUp } from "@/app/context/Signup/SignUpContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mode = theme?.mode ?? "light";
  const toggle = theme?.toggle ?? (() => {});
  const navBgClass =
    mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black";

  const { openSignup, logout, user } = useSignUp();

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 ${navBgClass} shadow-md`}>
      <div className="md:hidden flex justify-end pr-2">
        <BiMenu
          onClick={() => setOpen(!open)}
          className={`text-5xl ${!open ? "block" : "hidden"}`}
        />
      </div>
      <div>
        {open && (
          <div className="absolute bg-gray-300 w-full h-screen flex items-center flex-col">
            <p className="flex flex-1 text-3xl font-semibold my-5">Menu</p>
            <div className="flex flex-2 text-2xl font-semibold tracking-wider flex-col items-center [&_a]:my-5 ">
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

      <div className="hidden md:flex gap-2 px-6 py-2 text-xl font-semibold">
        <div className="pr-15">
          <Image width={60} className="rounded-full" src={logo} alt="Logo" />
        </div>

        <div className="flex items-center justify-between flex-4">
          {menuLinks.map((menu) => (
            <Link key={menu.id} href={menu.route}>
              {menu.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-2 items-center justify-center">
          {!user && (
            <button onClick={openSignup} className="cursor-pointer">
              Sign up
            </button>
          )}
          {user && (
            <button onClick={logout} className="cursor-pointer">
              Logout
            </button>
          )}
        </div>
        {user && (
          <div className="flex flex-1 items-center gap-8">
            <button className="text-3xl cursor-pointer">
              <BiHeart />
            </button>
            <button className="text-3xl cursor-pointer">
              <BiBasket />
            </button>
          </div>
        )}
        <button onClick={toggle} className="pr-5" aria-label="Toggle theme">
          {mode === "dark" ? (
            <BsSunFill size={30} color="yellow" />
          ) : (
            <BsMoonFill size={30} color="black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
