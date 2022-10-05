import CompagnySelector from "../CompagnySelector/CompagnySelector";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className=" border-gray-400 border-solid border-2 xl:flex flex-col h-screen ">
      {/* header */}
      <div className="flex flex-col justify-center items-center">
        <CompagnySelector />
      </div>
      {/* body */}
      <div className="flex-grow border-2 border-solid border-black">
        {children}
      </div>
    </div>
  );
};
export default Layout;
