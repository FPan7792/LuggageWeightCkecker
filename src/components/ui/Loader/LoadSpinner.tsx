import type { LoaderType_Style } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  style: LoaderType_Style;
};

const LoadSpinner = ({ style }: Props) => {
  const { color, icon, size } = style;

  return (
    <div className="h-full flex justify-center items-center ">
      <FontAwesomeIcon icon={icon} color={color} size={size} spin={true} />
    </div>
  );
};

export default LoadSpinner;
