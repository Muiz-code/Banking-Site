import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import logo from "../assets/images/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const navList = [
  {
    id: 1,
    title: "Company",
    to: "/",
  },
  {
    id: 2,
    title: "Key Features",
    to: "/",
  },
  {
    id: 3,
    title: "Alajo",
    to: "/",
  },
  {
    id: 4,
    title: "FAQs",
    to: "/",
  },
  {
    id: 5,
    title: "Contact Us",
    to: "/",
  },
];

const Menubar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <nav
      data-aos="fade-down"
      className="bg-[#E86135] flex place-items-center justify-between w-screen px-[70px] py-4 text-white font fixed z-[100000]"
    >
      <Link className="w-[10%] hover:scale-105 duration-100">
        <img src={logo} alt="" />
      </Link>
      <ul className="flex gap-5">
        {navList.map(({ id, title, to }) => (
          <li
            key={id}
            className="text-[16px] cursor-pointer font-[100] text-white hover:scale-105 duration-300"
          >
            <Link className="flex gap-4" to={to}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <Buttons
          btn="Login"
          style="bg-[#FFFFFF3D] butn rounded-md border hover:scale-105 duration-300"
        />
        <Buttons
          btn="Create an account"
          style="bg-[#FFBD50] butnz rounded-md  text-[#0A221C] hover:scale-105 duration-300"
        />
      </div>
    </nav>
  );
};

export default Menubar;
