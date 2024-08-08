interface ReadMoreButtonProps {
  children: React.ReactNode;
}
const ReadMoreButton = ({ children }: ReadMoreButtonProps) => {
  return <button className="bg-[var(--red)] w-full">{children}</button>;
};

export default ReadMoreButton;
