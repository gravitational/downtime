import NextImage from "next/image";
import logo from "../../public/assets/images/downtimeLogo.png";
import * as styles from "./Logo.css";

const Logo = () => {
  return (
    <div className={styles.imageContainer}>
      <NextImage src={logo} alt="downtime logo" />
    </div>
  );
};

export default Logo;
