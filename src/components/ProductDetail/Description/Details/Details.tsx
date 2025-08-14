import Specifications from "./Specifications.tsx";
import DescriptionSection from "./DescriptionSection.tsx";

const Details = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-10 p-7 w-full border border-gray-300">
      <Specifications></Specifications>
      <DescriptionSection description={description}></DescriptionSection>
    </div>
  );
};

export default Details;
