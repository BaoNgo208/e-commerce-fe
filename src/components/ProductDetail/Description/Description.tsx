import Tabs from "./Tabs.tsx";

const Description = ({ description }: { description: string }) => {
  return (
    <div>
      <Tabs description={description}></Tabs>
    </div>
  );
};

export default Description;
