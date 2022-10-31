export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

export const Footer: React.FC<IFooter> = ({ className, ...props }) => {
  return (
    <footer className={`w-full p-5 bg-slate-200 ${className}`} {...props}>
      <p>Brasil</p>
    </footer>
  );
};
