
import { BiLoaderAlt } from "react-icons/bi";
const SpinnerMini = () => {
    return (
      <BiLoaderAlt
        className=" animate-spin flex justify-center items-center"
        style={{ animationDuration: "0.5s", animationTimingFunction: "linear", animationIterationCount: "infinite" }}
      />
    );
  };
  
  export default SpinnerMini;
  