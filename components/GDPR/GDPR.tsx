import { useRef } from "react";
import { setCookie } from "nookies";

const GDPR = () => {
  const gdprBanner = useRef<HTMLDivElement>(null);

  const handleClick = (): void => {
    //hide banner when clicked
    if (gdprBanner.current !== null) {
      gdprBanner.current.classList.add("hidden");
    }

    //sets gdpr cookie when clicked
    setCookie(null, "gdpr", "consent_granted", {
      maxAge: 5 * 365 * 24 * 60 * 60,
      path: "/",
    });

    //updates permissions for gtag to function
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      region: [
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
      ],
    });
  };

  return (
    <>
      {/* GDPR banner only renders if there is no existing gdpr cookie */}
      <div
        ref={gdprBanner}
        className="fixed bottom-0 bg-black z-50 lg:h-10 w-full text-white font-bold align-center flex flex-col justify-center"
      >
        <div className="flex justify-center my-2 mx-2 md:mx-5 align-center">
          This site uses cookies to improve user experience. By using this site,
          you agree to our use of cookies.
          <button
            onClick={handleClick}
            className="px-1.5 ml-5 mr-2 md:ml-10 border border-devGreen md:w-[80px] md:h-[28px] md:whitespace-nowrap self-center"
          >
            OK, boss
          </button>
        </div>
      </div>
    </>
  );
};

export default GDPR;
