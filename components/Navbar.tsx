import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="max-w-5xl px-3 md:px-5 mx-auto pt-5">
      <div className="navbar bg-mygreen-dark shadow-xl rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-myspace"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-mygreen-dark rounded-box w-52"
            >
              <li>
                <Link href="#projects">
                  <a className="text-myspace">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#technologies">
                  <a className="text-myspace">Technologies</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a className="text-myspace">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a className="text-myspace">About</a>
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-mygreen-light hidden md:flex">
            Home
          </a>
        </div>
        <div className="navbar-center ">
          <a className="btn btn-ghost normal-case text-xl text-mygreen-light md:hidden">
            Home
          </a>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal p-0 mr-5 gap-5 hidden md:flex">
            <li>
              <Link href="#projects">
                <a className="text-myspace">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#technologies">
                <a className="text-myspace">Technologies</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a className="text-myspace">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a className="text-myspace">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
