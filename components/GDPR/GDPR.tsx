import { useState } from "react";
import * as styles from "./GDPR.css";

const gtagRegions = [
  "BE",
  "BG",
  "CZ",
  "DK",
  "DE",
  "EE",
  "IE",
  "GR",
  "ES",
  "FR",
  "HR",
  "IT",
  "CY",
  "LV",
  "LT",
  "LU",
  "HU",
  "MT",
  "NL",
  "AT",
  "PL",
  "PT",
  "RO",
  "SI",
  "SK",
  "FI",
  "SE",
  "US-CA",
];

const GDPR = () => {
  // lazy state initialization used in order to not lock the browser on localStorage look up
  const [showBanner, setShowBanner] = useState(() => {
    // in some cases, localStorage access will throw an error depending
    // on the user's browser. wrapping in a try-catch avoids white screening in case of error
    try {
      const hasCookieStored =
        typeof window !== "undefined" &&
        localStorage.getItem("hasCookie") === "true";

      return !hasCookieStored;
    } catch (e) {
      console.log(e);
      return true;
    }
  });

  const handleAcceptClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hasCookie", "true");
      setShowBanner(false);

      // window.gtag needs to be gated because in development, NEXT_PUBLIC_GTAG_ID is undefined which throws an error
      if (window.gtag) {
        // updating consent to track in google analytics in states/countries that require consent to do so
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          region: gtagRegions,
        });
      }
    }
  };

  return (
    <>
      {/* GDPR banner only renders if there is no existing gdpr cookie */}
      {showBanner && (
        <div className={styles.bannerContainer}>
          <div className={styles.banner}>
            This site uses cookies to improve user experience. By using this
            site, you agree to our use of cookies.
            <button onClick={handleAcceptClick} className={styles.button}>
              OK, boss
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GDPR;
