
const Spinner = () => {
  return (
    <div className="mx-auto my-12 w-16 h-16 rounded-full bg-gradient-to-br from-[#EDEEF0] to-[#FFFFFF] relative animate-spin">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EDEEF0] to-[#FFFFFF] opacity-60"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#EDEEF0] animate-pulse"></div>
    </div>
  );
};

export default Spinner;
