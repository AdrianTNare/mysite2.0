interface Props {
  body: string;
}

export const Alert = ({ body }: Props) => {
  return (
    <div className="alert bg-slate-600 shadow-lg  w-full max-w-xs p-3 left-0 right-0 mx-auto top-20 z-[100] fixed animate-bounce">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="text-myspace">{body}</span>
      </div>
    </div>
  );
};
