interface Props {
  heading: string;
  body: string;
  tools: string[];
  codeSrc: string;
  imgSrc: string;
}

export const ProjectCard = ({
  heading,
  body,
  tools,
  codeSrc,
  imgSrc,
}: Props) => {
  return (
    <div className="card card-compact w-72 glass mx-auto shadow-xl">
      <figure>
        <img src={imgSrc} alt="car!" />
      </figure>
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
        <div className="card-actions justify-evenly mt-4">
          <a
            href={codeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
          >
            Source code
          </a>
          <a
            href={codeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-xs normal-case bg-slate-600 border-slate-600 hover:bg-slate-800 hover:border-slate-800"
          >
            View App
          </a>
        </div>
      </div>
    </div>
  );
};
