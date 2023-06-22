import { useState, useEffect } from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { useTheme } from "next-themes";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      <nav className="w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block font-bold">
              <a className="text-4xl" href="#">
                <h2 className={dancingScript.className}>
                  {"<"}Hetarth{"/>"}
                </h2>
              </a>
              <div className="md:hidden">
                {currentTheme === "dark" ? (
                  <button onClick={() => setTheme("light")}>
                    {" "}
                    <Image
                      className="float-left"
                      src={"/light.png"}
                      alt=""
                      width={40}
                      height={30}
                    />
                  </button>
                ) : (
                  <button onClick={() => setTheme("dark")}>
                    <Image
                      className="float-left"
                      src={"/dark.png"}
                      alt=""
                      width={40}
                      height={30}
                    />
                  </button>
                )}

                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="hover:underline hover:decoration-red-500">
                  <a href="#">Home</a>
                </li>
                <li className="hover:underline hover:decoration-red-500">
                  <a href="#about">About</a>
                </li>
                <li className="hover:underline hover:decoration-red-500">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:underline hover:decoration-red-500">
                  <a href="#contact">Contact</a>
                </li>
                <li className="max-[600px]:hidden">
                  {currentTheme === "dark" ? (
                    <button onClick={() => setTheme("light")}>
                      {" "}
                      <Image
                        className="float-left"
                        src={"/light.png"}
                        alt=""
                        width={40}
                        height={30}
                      />
                    </button>
                  ) : (
                    <button onClick={() => setTheme("dark")}>
                      <Image
                        className="float-left"
                        src={"/dark.png"}
                        alt=""
                        width={40}
                        height={30}
                      />
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
