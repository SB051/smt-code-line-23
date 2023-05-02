import { useEffect, useState } from "react";
import bgSMT from "@assets/images/bgSMT.png";
import mobileBG from "@assets/images/mobileBG.png";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <img
        src={bgSMT}
        alt="BG"
        className="absolute hidden h-full w-full md:block"
      />
      <img
        src={mobileBG}
        alt="BG"
        className="absolute h-full w-full md:hidden"
      />
      {/* desktop layout */}
      <div className="absolute hidden h-full w-full md:block">
        <div
          className={`fade-in ${
            isLoaded ? "visible" : ""
          } flex h-full w-full flex-col items-center justify-center  space-y-8 text-center text-white`}
          style={{ transition: "opacity 1s ease-in-out" }}
        >
          <span className="primary-font text-7xl">Welcome to</span>
          <br />
          <span className="primary-font text-9xl">SMT Program</span>
        </div>
      </div>
      {/* mobile layout */}
      <div
        className={`absolute flex h-full w-full flex-col items-center justify-center space-y-6 text-center text-white md:hidden ${
          isLoaded ? "visible" : "fade-in"
        }`}
        style={{ transition: "opacity 1s ease-in-out" }}
      >
        <span className="primary-font text-3xl">Welcome to</span>
        <span className="primary-font text-5xl">SMT Program</span>
      </div>
    </>
  );
}

export default Home;
