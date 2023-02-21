import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-100 flex justify-center ">
      <CirclesWithBar
        height="180"
        width="180"
        color="#f3f4f6a1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Spinner;
