import LoadSpinner from "./LoadSpinner";
import type {
	IconDefinition,
	SizeProp,
} from "@fortawesome/fontawesome-svg-core";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export interface LoaderType_Style {
	icon: IconDefinition;
	size?: SizeProp | undefined;
	color: string | undefined;
	animate: boolean | undefined;
}

const loadSpinneStyle: LoaderType_Style = {
	icon: faSpinner,
	size: "2x",
	color: undefined,
	animate: true,
};
const LoadSpinnerBase = <LoadSpinner style={loadSpinneStyle} />;

export { LoadSpinnerBase };
