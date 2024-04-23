import img from "../../assets/images/Frame 34464.png";
import imgbg from "../../assets/images/triangle.png";
import imgbg2 from "../../assets/images/trianges.png";
import img2 from "../../assets/images/frame1.png";
import img3 from "../../assets/images/Frame2.png";
import save from "../../assets/images/savings.png";
import invest from "../../assets/images/investment.png";
import pay from "../../assets/images/payments.png";
import community from "../../assets/images/community.png";
import apple from "../../assets/images/Apple logo.png";
import google from "../../assets/images/Google play Logo.png";
import img4 from "../../assets/images/qrPhone.png";
import img5 from "../../assets/images/posMan.png";

export const hero = [
  {
    id: 1,
    comp1GenDiv:
      " flex justify-center px-[70px] place-items-center relative h-screen text-[#0A221C]",
    container: "w-[100%] place-items-center",
    headingDiv: "w-[100%] flex flex-col gap-3 relative h-screen justify-center",
    h1style1: "text-[62px] font-bold w-[100%] font2",
    h1style2: "text-[#FFBD50]",
    heading: "Create and manage ",
    heading2: "contribution groups!",
    paragraph:
      "Digitizing the centuries aged rotating savings and credit association (ROSCA), Digitizing the centuries aged rotating savings and credit association (ROSCA).",
    pStyle: "text-[18px] w-[70%]",
    btnText: "Get the App",
    btnStyle:
      "bg-[#FFBD50] butnz rounded-md  text-[#0A221C] hover:scale-105 duration-300 flex",
    imgDiv: "w-[100%] relative h-screen flex justify-center place-items-center",
    img: img,
    imgStyle: " w-[100%]",
    imgBg: imgbg,
    imgBgstyle1: "absolute bottom-[0] left-[-180px] z-n1 w-[100%]",
    imgBgstyle2: "w-[100%]",
    imgBg2: imgbg2,
    imgBgstyle3: "absolute top-[10px] left-[0] ",
    imgBgstyle4: "w-[900px]",
    data1: "fade-right",
    offset: "100",
    ease: "ease-in-sine",
    data2: "zoom-in-right",
    data3: "zoom-in-right",
    data4: "fade-down",
    data5: "zoom-out",
  },
];
export const content1 = [
  {
    id: 1,
    comp1GenDiv:
      " flex justify-center px-[70px] place-items-center relative text-[#0A221C]",
    container: "w-[100%] place-items-center",
    headingDiv: "w-[100%] flex flex-col gap-3",
    h1style1: "text-[62px] font-bold w-[100%] font2",
    h1style2: "text-[#FFBD50]",
    heading: "Community Rotating Savings (CRS)",
    paragraph:
      "Collectively save money in group of similar cooperative significance and rotate collection.  Join a group of SMEs and individuals of big corporations that pool money to rotate a lump sum contribution as microcredit for other members.",
    pStyle: "text-[18px] w-[70%]",
    btnText: "Learn More",
    btnStyle:
      "bg-[#FFBD50] butnz rounded-md  text-[#0A221C] hover:scale-105 duration-300 flex",
    imgDiv: "w-[100%]",
    img: img2,
    imgStyle: " w-[100%]",
    data1: "fade-left",
    offset: "100",
    ease: "ease-in-sine",
    data2: "zoom-in-right",
    data3: "zoom-in-right",
    data4: "fade-down",
    data5: "zoom-out",
  },
  {
    id: 2,
    comp1GenDiv: " flex justify-center px-[70px] place-items-center w-[100%]",
    container: "w-[100%] flex place-items-center",
    headingDiv: "w-[100%] flex flex-col gap-3",
    h1style1: "text-[62px] text-[#0A221C] font-bold w-[100%] font2",
    h1style2: "text-[#F67449]",
    heading: "Enjoy Alternative ",
    heading2: "Finance with Faysal",
    paragraph:
      "Collectively save money in group of similar cooperative significance and rotate collection.  Join a group of SMEs and individuals of big corporations that pool money to rotate a lump sum contribution as microcredit for other members.",
    pStyle: "text-[18px] w-[70%]",
    btnText: "Learn More",
    btnStyle:
      "bg-[#FFBD50] butnz rounded-md  text-[#0A221C] hover:scale-105 duration-300 flex",
    imgDiv2: "w-[100%]",
    img3: img3,
    imgStyle2: " w-[100%]",
    data1: "fade-right",
    offset: "100",
    ease: "ease-in-sine",
    data2: "zoom-in-right",
    data3: "zoom-in-right",
    data4: "fade-down",
    data5: "zoom-out",
  },
];
export const cards = [
  {
    id: 1,
    comp2Style:
      "bg-[#2C2A29] px-2 py-3 w-[30%] rounded-lg flex place-items-center gap-3 relative",
    iconDiv: "bg-[#F67449] w-[20%] flex justify-center rounded-full p-3",
    icon: save,
    iconStyle: "w-[100%]",
    txt1Style: "text-[#F67449] text-[24px]",
    text1: "Savings",
    txt2Style: "absolute bottom-1 right-3 text-[#C1C1C1] cursor-pointer",
    text2: "Learn More",
    linkTo: "",
  },
  {
    id: 2,
    comp2Style:
      "bg-[#2C2A29] px-2 py-3 w-[30%] rounded-lg flex place-items-center gap-3 relative",
    iconDiv: "bg-[#F67449] w-[20%] flex justify-center rounded-full p-3",
    icon: invest,
    iconStyle: "w-[100%]",
    txt1Style: "text-[#F67449] text-[24px]",
    text1: "Investments",
    txt2Style: "absolute bottom-1 right-3 text-[#C1C1C1] cursor-pointer",
    text2: "Learn More",
    linkTo: "",
  },
  {
    id: 3,
    comp2Style:
      "bg-[#2C2A29] px-2 py-3 w-[30%] rounded-lg flex place-items-center gap-3 relative",
    iconDiv: "bg-[#F67449] w-[20%] flex justify-center rounded-full p-3",
    icon: pay,
    iconStyle: "w-[100%]",
    txt1Style: "text-[#F67449] text-[24px]",
    text1: "Payments",
    txt2Style: "absolute bottom-1 right-3 text-[#C1C1C1] cursor-pointer",
    text2: "Learn More",
    linkTo: "",
  },
];
export const cards2 = [
  {
    id: 1,
    comp2Style:
      "bg-[#2C2A29] px-2 py-3 w-[30%] rounded-lg flex place-items-center gap-3 relative",
    iconDiv: "bg-[#F67449] w-[20%] flex justify-center rounded-full p-3",
    icon: save,
    iconStyle: "w-[100%]",
    txt1Style: "text-[#F67449] text-[24px]",
    text1: "Savings",
    txt2Style: "absolute bottom-1 right-3 text-[#C1C1C1] cursor-pointer",
    text2: "Learn More",
    linkTo: "",
  },
  {
    id: 2,
    comp2Style:
      "bg-[#2C2A29] px-2 py-3 w-[30%] rounded-lg flex place-items-center gap-3 relative",
    iconDiv: "bg-[#F67449] w-[20%] flex justify-center rounded-full p-3",
    icon: invest,
    iconStyle: "w-[100%]",
    txt1Style: "text-[#F67449] text-[24px]",
    text1: "Investments",
    txt2Style: "absolute bottom-1 right-3 text-[#C1C1C1] cursor-pointer",
    text2: "Learn More",
    linkTo: "",
  },
  {
    id: 3,
    comp2Style:
      "bg-[#2C2A29] px-2 py-3 w-[30%] rounded-lg flex place-items-center gap-3 relative",
    iconDiv: "bg-[#F67449] w-[20%] flex justify-center rounded-full p-3",
    icon: community,
    iconStyle: "w-[100%]",
    txt1Style: "text-[#F67449] text-[24px]",
    text1: "Community",
    txt2Style: "absolute bottom-1 right-3 text-[#C1C1C1] cursor-pointer",
    text2: "Learn More",
    linkTo: "",
  },
];
export const cards3 = [
  {
    id: 1,
    comp3Style: "bg-[#FFEFE8] shadow rounded-lg",
    comp3Style2: "p-5 flex w-[100%] place-items-center triangle2 ",
    txtContainer: " w-[100%] flex flex-col gap-3",
    h1txtStyle: "text-[45px] text-[#E86B35]",
    h1txt: "Faysal is available on Mobile. Start Saving Today",
    ptxtStyle: "text-[18px] text-[#5B5B5B] w-[80%]",
    ptxt: "Our Cards are built with high-end secutity infrastructure to ensure maximum privacy is provided and ultimately that you will never have to panic",
    btndivStyle: "flex gap-5",
    btn1: "bg-black p-2 gap-3 text-[#FFFFFF] text-[18px] flex place-items-center rounded-lg w-[25%] justify-center hover:scale-105 duration-300",
    btn2: "bg-black p-2 gap-3 text-[#FFFFFF] text-[18px] flex place-items-center rounded-lg w-[25%] justify-center hover:scale-105 duration-300",
    icon: apple,
    iconStyle: "w-[20%]",
    btntxt: "App Store",
    icon2: google,
    iconStyle2: "w-[20%]",
    btntxt2: "Google Play",
    imgDiv: "w-[50%] flex justify-center",
    imgStyle: "bg-[#FFE7DD] px-4 pb-4 w-[80%] rounded-lg",
    img: img4,
  },
  {
    id: 2,
    comp3Style: "bg-[#0A221C] shadow rounded-lg",
    comp3Style2: "p-5 flex w-[100%] place-items-center triangle3 ",
    txtContainer: " w-[100%] flex flex-col gap-3",
    h1txtStyle: "text-[45px] text-[#FFF3E0]",
    h1txt: "Earn more as a remote agent with Faysal",
    ptxtStyle: "text-[18px] text-[#FFF3E0] w-[80%]",
    ptxt: "Grow your agency banking business with the inclusion of microcredit collection, thrift and ajo or esusu or adashe rotating savings.",
    btndivStyle: "flex gap-5",
    btn1: "bg-[#FFBD50] p-[12px] gap-3 text-[#000] text-[18px] flex place-items-center rounded-lg w-[35%] justify-center hover:scale-105 duration-300",
    btntxt: "Become an Agent",
    imgDiv: "w-[50%] flex justify-center",
    imgStyle: "bg-[#FFF3E0] px-4 pb-4 w-[80%] rounded-lg",
    img: img5,
  },
];
