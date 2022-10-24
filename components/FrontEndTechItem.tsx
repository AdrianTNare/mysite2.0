import { FiMonitor } from "react-icons/fi";

export const FrontEndTechItem = () => {
  return (
    <div>
      <div></div>
      <h5 className="text-2xl font-bold text-mygreen-dark flex items-center">
        Front-End {<FiMonitor className="ml-2" />}
      </h5>
      <p>Experience with:</p>
      <p className="font-bold">React, Svelte, Nextjs</p>
      <p className="font-bold">MUI, Chakra, Tailwind</p>
    </div>
  );
};
