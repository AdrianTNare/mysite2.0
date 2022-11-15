import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiWechat } from "react-icons/si";
import { BackendTechItem } from "./BackendTechItem";
import { CiTechItem } from "./CITechItem";
import { FrontEndTechItem } from "./FrontEndTechItem";

export const Technologies = () => {
  return (
    <div className="bg-mygreen-light min-h-[85vh]">
      <div className="max-w-xl lg:max-w-3xl px-3 md:px-5 mx-auto pt-16 md:pt-16">
        <h2 className="text-5xl text-mygreen-dark font-bold">Technologies</h2>
        <p className="py-6 max-w-lg">
          I&apos;ve generally worked with a wide variety of technologies in the
          past, with a focus on React-based developemnt. A few of those are
          listed down below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-xl lg:max-w-3xl mx-auto py-4">
          <FrontEndTechItem />
          <BackendTechItem />
          <CiTechItem />
        </div>
        <h2 className="text-5xl text-mygreen-dark font-bold mt-16">
          About Adrian
        </h2>
        <p className="pt-6 max-w-lg">
          A Full-stack web developer with a focus on the react ecosystem. He
          mostly works with Next.js,TypeScript with help of the React Testing
          Library and Vitest to build stable, performant and well tested
          applications.
        </p>
        <p className="pt-2 max-w-lg">
          In his spare time he can be found tinkering with his vim config so
          feel free to inbox him with a neat vim trick you might have up your
          sleeve.
        </p>
        <div className="pt-28 pb-4 md:pt-20">
          <p className="text-mygreen-dark text-2xl font-bold">Contact</p>
          <div className="flex mt-2 gap-1 font-bold">
            <p className="flex">
              Email <MdEmail className="text-mygreen-dark text-2xl ml-1" /> :{" "}
            </p>
            <p className="font-bold text-mygreen-dark">
              adriantnare@icloud.com
            </p>
          </div>
          <div className="flex justify-between py-4 items-center">
            <p className="font-bold">Social media:</p>
            <ul className="menu menu-horizontal gap-0 flex text-2xl">
              <li>
                <a>
                  <BsGithub className="text-mygreen-dark" />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin className="text-mygreen-dark" />
                </a>
              </li>
              <li>
                <a>
                  <SiWechat className="text-mygreen-dark" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
