import Image from "next/image";
import Link from "next/link";

export const Landing = () => {
  return (
    <div className="max-w-xl lg:max-w-3xl  mx-auto">
      <div>
        <div className="hero min-h-[88vh]">
          <div className="hero-content flex-col md:flex-row-reverse">
            <div className="rounded-lg shadow-2xl  h-[400px] w-[18rem] sm:w-[38rem] relative">
              <Image
                src="/formal.jpg"
                alt="landing image"
                objectFit="cover"
                layout="fill"
                className="rounded-lg"
              />
            </div>
            {/* <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            /> */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl text-mygreen-dark font-bold">
                Adrian Nare
              </h1>
              <p className="py-6">
                I&apos;m a Full Stack JavaScript/TypeScript Web Developer, Vim
                keybindings enthusiast and a Computer Science graduate. I&apos;m
                also generally interested in all things tech.
              </p>
              <Link href="#contact">
                <a className="btn bg-mygreen-dark border-mygreen-dark shadow-xl">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
