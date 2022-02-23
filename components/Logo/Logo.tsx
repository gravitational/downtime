import NextImage from "next/image";
import logo from "../../public/assets/images/downtimeLogo.png";

const Logo = () => {
  return (
    <div className="w-6/12 max-w-[600px] mt-14 lg:mt-16">
      <NextImage src={logo} alt="downtime logo" />
    </div>
  );
};

export default Logo;
