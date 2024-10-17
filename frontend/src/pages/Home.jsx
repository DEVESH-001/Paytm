import { useNavigate } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen bg-center"
      style={{
        backgroundImage:
          "url('https://www.paypalobjects.com/marketing/web23/in/home/hero-banner-desktop-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-7 "></div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-6xl font-extrabold uppercase">
          Change the way you{" "}
          <span className="inline-block text-blue-500">money</span>
        </h1>
        <p className="mt-3 text-2xl font-bold  ">
          For those who want more from their money —{" "}
          <span className="block">
            there’s{" "}
            <span className="text-2xl  text-amber-500  border-b-2">
              QuickPAY
            </span>{" "}
            . Sign up for free, in a tap.
          </span>
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTimeout(() => {
              navigate("/signup");
            }, 1000);
          }}
          className="mt-6 font-mono border-4 rounded-full py-2 px-4 text-sm bg-black text-white hover:bg-gray-800"
        >
        Get QuickPAY Now
        </button>

        {/* Contact Developer Section */}
      </div>

      {/* Second Section */}
      <div>
        <div className="mt-6 text-white">
          Contact Developer
          <div className="flex gap-6 justify-center mt-3 animate-pulse ">
            <a
              href="https://www.linkedin.com/in/deveshyadav1/"
              target="_blank"
              className="text-white text-3xl "
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/DEVESH-001"
              target="_blank"
              className="text-white text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
