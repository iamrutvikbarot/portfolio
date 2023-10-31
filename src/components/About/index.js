import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About({ width }) {
  const getDate = () => {
    var dob = new Date("07/20/2000");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  function Button() {
    return (
      <button className="py-3 m-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
        <a
          href={require("../../assets/files/Rutvik_Barot.pdf")}
          download={"Rutvik'sResume.pdf"}
        >
          Download CV
          <DownloadIcon />
        </a>
      </button>
    );
  }
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 m-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Rutvik Barot,</span> a Web
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I love playing music, reading comics and playing games.I'm working
            in{" "}
            <a href="https://systemintegration.in/our-team/">
              BMV System Integration
            </a>{" "}
            from July 2022. I am {getDate()} years old.I love exploring new
            technologies.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for jobs. I worked on ReactJs, React Native,
            Google App Script. I am also looking to collaborate in open-source
            projects.
          </p>
        </div>

        {width > 760 && (
        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
            
              <div className="motion-safe:animate-zoomy">
                <lottie-player
                  autoplay
                  loop
                  mode="bounce"
                  src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
                  style={{ width: "350px" }}
                />
              </div>
              <Button />
            
        </div>
          )}
      </div>
      { width < 760 && <Button /> }
    </div>
  );
}
