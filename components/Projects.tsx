import { ProjectCard } from "./PorjectCard";

export const Projects = () => {
  return (
    <div id="projects" className="bg-mygreen-dark min-h-[85vh]">
      <div className="max-w-5xl px-3 md:px-5 mx-auto pt-16 md:pt-16">
        <h2 className="text-5xl text-mygreen-light font-bold text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-xl lg:max-w-3xl mx-auto py-20">
          <ProjectCard
            heading={"Personal Portfolio"}
            body={
              "A uniquw, responsive, and sleek website for presenting my work."
            }
            tools={["React", "DaisyUI"]}
            codeSrc={"https://github.com/AdrianTNare/"}
            imgSrc={"https://placeimg.com/400/225/arch"}
          />
          <ProjectCard
            heading={"Blog Frontend"}
            body={
              "Created a site allowing user to create, view, and comment on blog posts."
            }
            tools={["React", "DaisyUI"]}
            codeSrc={"https://github.com/AdrianTNare/myblog-frontend"}
            imgSrc={"https://placeimg.com/400/225/arch"}
          />
          <ProjectCard
            heading={"Blog Backend"}
            body={"Created a Java-based backend to support my Blog's frontend."}
            tools={["Java", "Springboot"]}
            codeSrc={"https://github.com/AdrianTNare/MyBlog-Springboot-Backend"}
            imgSrc={"https://placeimg.com/400/225/arch"}
          />
        </div>
      </div>
    </div>
  );
};
