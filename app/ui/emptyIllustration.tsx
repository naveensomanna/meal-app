type IllustrationProps = {
  info: string;
};

export const EmptyIllustration = ({ info }: IllustrationProps) => {
  return <p className="text-center  whitespace-pre-wrap ">{info}</p>;
};
