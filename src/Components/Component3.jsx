const Component3 = ({
  comp3Style,
  comp3Style2,
  txtContainer,
  h1txtStyle,
  h1txt,
  ptxtStyle,
  ptxt,
  btndivStyle,
  icon,
  iconStyle,
  btntxt,
  icon2,
  iconStyle2,
  btntxt2,
  imgStyle,
  img,
  btn1,
  btn2,
  imgDiv,
}) => {
  return (
    <div className={comp3Style} data-aos="zoom-out">
      <div className={`${comp3Style2}`}>
        <div className="flex flex-col gap-4 w-[70%]">
          <div className={txtContainer}>
            <h1 className={h1txtStyle}>{h1txt}</h1>
            <p className={ptxtStyle}>{ptxt}</p>
          </div>
          <div className={btndivStyle}>
            <button className={btn1}>
              <img src={icon} className={iconStyle} alt="" />
              {btntxt}
            </button>
            <button className={btn2}>
              <img src={icon2} className={iconStyle2} alt="" />
              {btntxt2}
            </button>
          </div>
        </div>
        <div className={imgDiv}>
          <img src={img} className={imgStyle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Component3;
