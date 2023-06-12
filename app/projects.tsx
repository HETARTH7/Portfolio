import Image from "next/image";
const projectsList = require("../projects.json");
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const Projects = () => {
  return (
    <div className="text-center mt-20 mb-10" id="projects">
      <h1
        className={`${pacifico.className} font-sans text-6xl max-[600px]:text-4xl hover:underline hover:decoration-red-500`}
      >
        Projects
      </h1>
      {projectsList.projects.map((x: any, index: any) => {
        return (
          <div
            className={`md:flex text-center mb-4 mt-20 hover:animate-pulse ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div className="md:w-1/2 text-center">
              <a className="text-4xl" href={x.URL} target="_blank">
                {x.name}
              </a>
              <p>{x.stack}</p>
              <p>{x.description}</p>
            </div>
            <div className="md:w-1/2 md:pl-24">
              <Image
                className="rounded-2xl"
                src={x.imageURL}
                alt=""
                width={500}
                height={100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;