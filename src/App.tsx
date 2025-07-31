import { useState, useEffect } from "react";
import footerL from "/wii_assets/footer_l.svg";
import footerC from "/wii_assets/footer_c.png";
import footerR from "/wii_assets/footer_r.svg";
import homeButton from "/wii_assets/home_button.png";
import mailButton from "/wii_assets/mail_button.png";
import homeIcon from "/wii_assets/home_icon.png";
import mailIcon from "/wii_assets/mail_icon.svg";
import buttonRight from "/wii_assets/button_right.svg";
import buttonLeft from "/wii_assets/button_left.svg";
import type { ChannelType } from "./types/ChannelType";
import Channel from "./components/Channel";

const channels: ChannelType[] = [
  {
    name: "Scratch Away",
    repo: "/scratch-art",
    date: "2025-06-22",
    img: "scratch_art.png",
  },
  {
    name: "Curiosity Cards",
    repo: "/curiosity-cards",
    date: "2025-06-29",
    img: "curiosity_cards.png",
  },
  {
    name: "Showstubs",
    repo: "/showstubs",
    date: "2025-07-06",
    img: "showstubs.png",
  },
  { name: "Watcard", repo: "/watcard", date: "2025-07-13", img: "watcard.png" },
  {
    name: "Mii Maker",
    repo: "/mii-maker",
    date: "2025-07-20",
    img: "mii_maker.png",
  },
  { name: "Project 6", repo: "", date: "2025-07-31" },
  { name: "Project 7", repo: "", date: "2025-08-03" },
  { name: "Project 8", repo: "", date: "2025-08-10" },
  { name: "Project 9", repo: "", date: "2025-08-17" },
  { name: "Project 10", repo: "", date: "2025-08-24" },
  { name: "Project 11", repo: "", date: "2025-08-31" },
  { name: "Project 12", repo: "", date: "2025-09-07" },
];

function App() {
  const [time, setTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleWindowResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes.toString().padStart(2, "0");

    return { hours, minutes: formattedMinutes, ampm };
  };

  const formatDate = (date: Date) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${dayOfWeek} ${month}/${day}`;
  };

  const { hours, minutes, ampm } = formatTime(time);
  const dateString = formatDate(time);

  if (isMobile) {
    return (
      <div className="flex font-wii cursor-wii min-h-screen flex-col bg-[repeating-linear-gradient(to_bottom,#F8F8F8_0px,#F8F8F8_8px,transparent_8px,transparent_10px)]">
        <div className="flex justify-between items-center px-9 pt-8">
          <img
            onClick={() => (window.location.href = "https://jaryddiamond.com")}
            src={homeIcon}
            alt="home"
            className="h-10"
          />
          <div className="flex items-center gap-2 text-gray-600 text-4xl font-light tracking-wider">
            <span>{hours}</span>
            <span className="text-4xl opacity-70 animate-flash">:</span>
            <span>{minutes}</span>
            <span className="text-sm font-normal align-text-bottom">
              {ampm}
            </span>
          </div>
          <img
            onClick={() => window.open("mailto:jarydnoahdiamond@gmail.com")}
            src={mailIcon}
            alt="mail"
            className="w-10 h-10 top-0"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 p-9">
          {channels.map((channelData) => Channel({ channelData, isMobile }))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex font-wii cursor-wii min-h-screen flex-col bg-[repeating-linear-gradient(to_bottom,#F8F8F8_0px,#F8F8F8_8px,transparent_8px,transparent_10px)]">
      <div className="flex-1 grid grid-cols-4 gap-5 px-12 py-8 auto-rows-fr">
        {channels.map((channelData) => Channel({ channelData, isMobile }))}
      </div>

      <div className="h-[200px] flex relative">
        <img
          src={footerL}
          alt="footer left"
          className="w-[300px] h-full object-cover"
        />

        <div
          className="flex-1 h-full bg-repeat-x"
          style={{
            backgroundImage: `url(${footerC})`,
            backgroundPosition: "bottom",
          }}
        />

        <img
          src={footerR}
          alt="footer right"
          className="w-[300px] h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-between items-center px-12">
          <div className="relative w-[165px]">
            <img
              src={buttonLeft}
              alt="button background"
              width={165}
              className="absolute -left-[48px] bottom-[0px]"
            />

            <button
              className="ml-[10px] relative z-10 transition-all duration-200 hover:scale-110 cursor-wii"
              onClick={() =>
                (window.location.href = "https://jaryddiamond.com")
              }
            >
              <img
                src={homeButton}
                alt="home"
                className="w-[100px] h-[100px]"
              />
            </button>
          </div>

          <div className="flex flex-col items-center justify-between h-full">
            <div className="flex items-center gap-2 text-gray-600 text-4xl font-light tracking-wider">
              <span>{hours}</span>
              <span className="text-4xl opacity-70 animate-flash">:</span>
              <span>{minutes}</span>
              <span className="text-sm font-normal align-text-bottom">
                {ampm}
              </span>
            </div>

            <div className="text-gray-600 text-4xl font-light tracking-wide mb-16">
              {dateString}
            </div>
          </div>

          <div className="relative w-[165px]">
            <img
              src={buttonRight}
              alt="button background"
              width={165}
              className="absolute -right-[48px] bottom-[0px]"
            />

            <button
              className="ml-[52px] relative z-10 transition-all duration-200 hover:scale-110 cursor-wii"
              onClick={() => window.open("mailto:jarydnoahdiamond@gmail.com")}
            >
              <img
                src={mailButton}
                alt="mail"
                className="w-[100px] h-[100px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
