import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";

export default function Home({width}) {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

const jDate = new Date("2022-07-04");
const cDate = new Date();

// Calculate the difference in milliseconds
const timeDifference = cDate - jDate;

// Convert milliseconds to years and months
const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
const years = Math.floor(timeDifference / millisecondsInYear);
const months = Math.floor((timeDifference % millisecondsInYear) / (1000 * 60 * 60 * 24 * 30.44));

  return (
    <div className="min-h-screen grid grid-cols-1 gap-7 name content-center text-center">
      <h1
        className="head text-5xl font-semibold tracking-[3px] pb-2 "
        data-aos="zoom-in-up"
      >
        Welcome
      </h1>
      <div
        className="text-4xl text-yellow-500 pb-16"
        data-aos-delay="700"
        data-aos="zoom-in"
      >
        {" "}
        <Typewriter
          options={{
            strings: [
              "✋I'm Rutvik Barot",
              "I'm an enthusiast Frontend 🌐developer",
              `I've ${years}.${months} years of experience in react framework `,
              "You can 📲 me through discord or ✉️",
            ],
            delay: 150,
            pauseFor: 1500,
            autoStart: true,
            loop: true,
            stringSplitter: stringSplitter,
          }}
        />
      </div>
      <button
        className="py-2 mx-auto px-7 bg-transparent border-2 w-fit border-blue-500 rounded-sm  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800"
        data-aos="zoom-out-up"
        data-aos-delay="1400"
      >
        <a href="#contact">Contact Me</a>
      </button>
    </div>
  );
}
