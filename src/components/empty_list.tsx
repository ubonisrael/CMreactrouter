const EmptyList = ({ type }: { type: string }) => (
  <p className="text-base uppercase py-4">
    {`you don't have any ${type}. Click on the ${type == "contact" ? "contact" : "favorite"} button to add a ${type}.`}
  </p>
);

export default EmptyList;
