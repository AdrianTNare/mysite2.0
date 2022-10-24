import { FaServer } from "react-icons/fa";
export const BackendTechItem = () => {
  return (
    <div>
      <h5 className="text-2xl font-bold text-mygreen-dark flex items-center">
        Back-End <FaServer className="text-mygreen-dark  ml-2" />
      </h5>
      <p>Experience with:</p>
      <p className="font-bold">NodeJs, Express.js</p>
      <p className="font-bold">GraphQl, SpringBoot</p>
    </div>
  );
};
