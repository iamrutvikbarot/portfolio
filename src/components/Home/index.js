import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";

export default function Home({width}) {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const sDate = "2022-07-04" 
  const cDate = new Date();
  const st = new Date(sDate);
  const yD = cDate.getFullYear() - st.getFullYear();
  const mD = cDate.getMonth() - st.getMonth();





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
              `I've ${yD}.${mD+1} years of experience in react framework `,
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
