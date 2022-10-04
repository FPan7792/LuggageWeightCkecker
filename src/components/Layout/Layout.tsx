import CompagnySelector from "../CompagnySelector/CompagnySelector";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-20 w-8 border-black border-2 border-solid bg-cyan-200 text-red-600  ">
      <>
        <CompagnySelector />
      </>
      {children}
    </div>
  );
};
export default Layout;
