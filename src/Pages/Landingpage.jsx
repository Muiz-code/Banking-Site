import Component1 from "../Components/Component1";
import {
  cards,
  cards2,
  cards3,
  content1,
  hero,
} from "../Components/Mapping/map";
import Menubar from "../Components/Menubar";
import ndic from "../assets/images/NDIC.png";
import cbn from "../assets/images/CBN.png";
import Component2 from "../Components/Component2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import atmimg1 from "../assets/images/atms.png";
import atmimg2 from "../assets/images/atm2.png";
import Component3 from "../Components/Component3";

const Landingpage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div>
        <Menubar />
      </div>

      <div className="bg-[#E86135]">
        {hero.map((items) => (
          <Component1 key={items.id} {...items} style={items.style} />
        ))}
      </div>

      <div className="w-screen flex justify-center place-items-center bg-[#FFFFFF] p-3">
        <div className="flex place-items-center gap-3">
          <p>Insured by:</p>
          <img src={ndic} className="w-[20%]" alt="" />
        </div>
        <div className="flex place-items-center gap-3">
          <p>Regulated by:</p>
          <img src={cbn} className="w-[20%]" alt="" />
        </div>
      </div>

      <div className="bg-[#F8F8F8] flex flex-col gap-5 py-5">
        {content1.map((items) => (
          <Component1 key={items.id} {...items} style={items.style} />
        ))}
      </div>

      <div className="px-[70px] py-5 flex flex-col gap-[70px]">
        <div className="font2 flex flex-col gap-3">
          <h1 className="text-[48px] font-bold text-[#0A221C]">
            Explore Features
          </h1>
          <p className="text-[18px] text-[#0A221C]">
            We have everything you need for your financial freedom
          </p>
        </div>
        <div data-aos="zoom-in" className="flex flex-col gap-5">
          <div className="flex justify-between">
            {cards.map((items) => (
              <Component2 key={items.id} {...items} style={items.style} />
            ))}
          </div>
          <div
            className="flex justify-between"
            data-aos="zoom-in"
            data-aos-offset="100"
          >
            {cards2.map((items) => (
              <Component2 key={items.id} {...items} style={items.style} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-[70px] py-5 flex flex-col gap-[50px]">
        <div>
          <h1 className="text-[#0A221C] text-[24px] font-[700]">
            Faysal Cards
          </h1>
        </div>
        <div className="flex gap-3">
          <div
            className=" bg-[#F9F9F9] w-[50%] shadow2 rounded-lg"
            data-aos="zoom-in"
          >
            <div className="triangle p-5 flex flex-col gap-4 ">
              <h1 className="text-[48px] font-[400]">
                You are entitled to the magical Faysal Card
              </h1>
              <p className="text-[18px] text-[#5B5B5B]">
                Our Cards are built with high-end secutity infrastructure to
                ensure maximum privacy is provided and ultimately that you will
                never have to panick
              </p>
              <img src={atmimg1} className="w-[100%]" alt="" />
            </div>
          </div>
          <div
            className=" bg-[#FFF3E0] w-[50%] p-5 shadow2 rounded-lg"
            data-aos="zoom-in"
            data-aos-offset="200"
          >
            <img src={atmimg2} className="w-[100%]" alt="" />
          </div>
        </div>
      </div>

      <div className="px-[70px] py-5 flex flex-col gap-[70px]">
        {cards3.map((items) => (
          <Component3 key={items.id} {...items} style={items.style} />
        ))}
      </div>
    </div>
  );
};

export default Landingpage;
