const DescriptionSection = ({ description }: { description: string }) => {
  return (
    <div>
      <h1 className="uppercase font-bold tracking-wide text-base">
        Descriptions
      </h1>
      <div>
        <pre className="whitespace-pre-wrap">{`${description}`}</pre>
      </div>
    </div>
  );
};

export default DescriptionSection;
