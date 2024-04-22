import { Link } from "react-router-dom";

const Component2 = ({
  comp2Style,
  icon,
  iconStyle,
  iconDiv,
  txt1Style,
  text1,
  txt2Style,
  text2,
  linkTo,
}) => {
  return (
    <div className={comp2Style}>
      <div className={iconDiv}>
        <img src={icon} className={iconStyle} alt="" />
      </div>
      <p className={txt1Style}>{text1}</p>
      <Link to={linkTo} className={txt2Style}>
        {text2}
      </Link>
    </div>
  );
};

export default Component2;
