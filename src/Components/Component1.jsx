import Buttons from "./Buttons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Component1 = ({
  comp1GenDiv,
  headingDiv,
  heading,
  heading2,
  h1style1,
  h1style2,
  paragraph,
  pStyle,
  btnText,
  btnStyle,
  imgDiv,
  imgDiv2,
  img,
  img3,
  imgStyle,
  imgStyle2,
  imgBg,
  imgBg2,
  imgBgstyle1,
  imgBgstyle2,
  imgBgstyle3,
  imgBgstyle4,
  data1,
  offset,
  ease,
  data2,
  data3,
  data4,
  data5,
  container,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className={comp1GenDiv}>
        <div
          className={container}
          data-aos={data1}
          data-aos-offset={offset}
          data-aos-easing={ease}
        >
          <div className={imgDiv2} data-aos={data5}>
            <img src={img3} className={imgStyle2} />
          </div>
          <div className={headingDiv}>
            <h1 className={h1style1} data-aos={data2}>
              {heading} <span className={h1style2}>{heading2}</span>
            </h1>
            <p className={pStyle} data-aos={data3}>
              {paragraph}
            </p>
            <div data-aos={data4}>
              <Buttons btn={btnText} style={btnStyle} />
            </div>
            <div className={imgBgstyle3}>
              <img src={imgBg2} className={imgBgstyle4} alt="" />
            </div>
          </div>
        </div>
        <div className={imgDiv} data-aos={data5}>
          <img src={img} className={imgStyle} />
          <div className={imgBgstyle1}>
            <img src={imgBg} className={imgBgstyle2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
