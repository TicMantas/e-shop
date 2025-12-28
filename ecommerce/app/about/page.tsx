import logo from "../public/logo.png";
import Link from "next/link";
import AlexProfilePic from "../public/Alex.png";
import MantasProfilePic from "../public/MantasImage.png";
import TaylorProfilePic from "../public/Taylor.png";
import Image from "next/image";
const About = () => {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen">
      <header className="flex flex-col items-center mb-3 p-10">
        <Image src={logo} alt="Logo" className="w-40 rounded-full" />
        <p className="mt-3 text-5xl font-extrabold">About us</p>
        <p className="mt-6 text-gray-400 text-lg">
          We curate quality products and deliver a simple, fast shopping
          experience. Built with care — browse our products or get in touch.
        </p>
        <div className="flex gap-3 mt-6 font-semibold [&_a]:hover:bg-black [&_a]:hover:text-white">
          <Link className="border border-gray-400 rounded-3xl p-2" href={"/products"}>
            Browse products
          </Link>
          <Link className="border border-gray-400 rounded-3xl p-2" href={"/contacts"}>
            Contact us
          </Link>
        </div>
      </header>
      <section className="flex justify-center flex-col bg-gray-200/20 p-10 mb-10 rounded-2xl">
        <p className="text-gray-400 ">
          Deliver great products at fair prices, with transparent information
          and reliable support. We focus on a clean shopping experience and fast
          delivery.
        </p>
        <p className="mt-6 text-xl font-semibold text-center">Team</p>
        <div className="flex justify-around mt-3 gap-4">
          <div className="p-3 text-center">
            <Image
              src={MantasProfilePic}
              alt="Mantas"
              className="mx-auto w-30 h-30 bg-gray-100 rounded-full"
            />
            <p className="mt-2 font-medium">Mantas</p>
            <p className="text-sm text-gray-500">Founder</p>
          </div>
          <div className="p-3 text-center">
            <Image
              src={AlexProfilePic}
              alt="Alex"
              className="mx-auto w-30 h-30 bg-gray-100 rounded-full"
            />
            <p className="mt-2 font-medium">Alex</p>
            <p className="text-sm text-gray-500">Product</p>
          </div>
          <div className="p-3 text-center">
            <Image
              src={TaylorProfilePic}
              alt="Taylor"
              className="mx-auto w-30 h-30 bg-gray-100 rounded-full"
            />
            <p className="mt-2 font-medium">Taylor</p>
            <p className="text-sm text-gray-500">Support</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
