import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

interface Props {
  heading: string;
  body: string;
  tools: string[];
  imgSrc: StaticImageData | string;
}

export const ProjectCard = ({
  heading,
  body,
  tools,
  imgSrc,
  children,
}: Props & PropsWithChildren) => {
  return (
    <div className="card card-compact w-72 glass mx-auto shadow-xl">
      <div className="rounded-lg h-[162px] w-[18rem] sm:w-[18rem] relative">
        <Image
          src={imgSrc}
          alt="landing image"
          objectFit="cover"
          layout="fill"
        />
      </div>
      {/* <figure>
        <img src={imgSrc} alt="car!" />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title  text-myspace">{heading}</h2>
        <span className="border-4 border-slate-600 w-12  " />
        <div className="flex ">
          <p className="text-myspace mt-2 ">{body}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tools.map((item, index) => (
            <div
              key={item + index}
              className="badge badge-lg border-myspace text-myspace bg-mygreen-dark"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="card-actions justify-evenly mt-4">{children}</div>
      </div>
    </div>
  );
};
