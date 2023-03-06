import { useEffect, useState } from "react";
import { Alert } from "./Alert";
import { ProjectCard } from "./PorjectCard";
import blogOpt from "../public/blog_opt.jpg";
import portfolioOpt from "../public/portfolio_opt.jpg";

type AlertKeys = "portfolio" | "blogBackend" | "blogFrontend";
interface Message {
  title: string;
  body: string;
}

const alertMessages: Record<AlertKeys, Message> = {
  portfolio: {
    title: "In View",
    body: "You area currently viewing the app",
  },
  blogBackend: {
    title: "Live Site Unavailable",
    body: "The live site is currently unvailable",
  },
  blogFrontend: {
    title: "Live Site Unavailable",
    body: "The live site is currently unvailable",
  },
};

export const Projects = () => {
  const [message, setMessage] = useState<Message>({
    title: "",
    body: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (project: AlertKeys) => {
    setMessage(alertMessages[project]);
    setShowAlert(true);
  };

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;
    const hideAlert = async () => {
      timeoutID = setTimeout(() => {
        setShowAlert(false);
      }, 2500);
    };
    if (showAlert) {
      hideAlert();
    }
    return () => clearTimeout(timeoutID);
  }, [showAlert]);

  return (
    <div id="projects" className="bg-mygreen-dark min-h-[85vh]">
      {showAlert && <Alert body={message.body} />}
      <div className="max-w-5xl px-3 md:px-5 mx-auto pt-16 md:pt-16">
        <h2 className="text-5xl text-mygreen-light font-bold text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-xl lg:max-w-3xl mx-auto py-20">
          <ProjectCard
            heading={"Personal Portfolio"}
            body={
              "A unique, responsive, and sleek website for presenting my work."
            }
            tools={["React", "DaisyUI"]}
            imgSrc={portfolioOpt}
          >
            <a
              href={"https://github.com/AdrianTNare/mysite2.0"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              Source code
            </a>
            <button
              onClick={() => handleClick("portfolio")}
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              View App
            </button>
          </ProjectCard>
          <ProjectCard
            heading={"Blog Frontend"}
            body={
              "Created a site allowing users to create, view, and comment on blog posts."
            }
            tools={["React", "DaisyUI"]}
            imgSrc={blogOpt}
          >
            <a
              href={"https://github.com/AdrianTNare/myblog-frontend"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              Source code
            </a>
            <a
              href="https://wayvy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              View App
            </a>
            {/*
            <button
              onClick={() => handleClick("blogFrontend")}
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              View App
            </button>
            */}
          </ProjectCard>
          <ProjectCard
            heading={"Blog Backend"}
            body={"Created a Java-based backend to support my Blog's frontend."}
            tools={["Java", "Springboot"]}
            imgSrc={blogOpt}
          >
            <a
              href={"https://github.com/AdrianTNare/MyBlog-Springboot-Backend"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              Source code
            </a>
            <a
              href="https://adn-myblog-backend-prod.up.railway.app/posts/all"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              View App
            </a>
            {/*
            <button
              onClick={() => handleClick("blogBackend")}
              className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
            >
              View App
            </button>
            */}
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};
