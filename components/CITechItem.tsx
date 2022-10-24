import { BiGitPullRequest } from "react-icons/bi";
export const CiTechItem = () => {
  return (
    <div>
      <h5 className="text-2xl font-bold text-mygreen-dark flex items-center">
        CI/CD <BiGitPullRequest className="text-mygreen-dark  ml-2" />
      </h5>
      <p>Experience with:</p>
      <p className="font-bold">Vitest, RTL</p>
      <p className="font-bold">Git, Docker</p>
    </div>
  );
};
