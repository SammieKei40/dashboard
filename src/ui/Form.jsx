/* eslint-disable react/prop-types */
function Form({ children, type }) {
  return (
    <form
      className={`${
        type === "regular"
          ? "p-6 bg-gray-50 border border-gray-300 rounded-md"
          : "w-80rem"
      } ${type === "modal" && "w-80rem"} overflow-hidden text-sm`}
    >
      {children}
    </form>
  );
}

Form.defaultProps = {
  type: "regular",
};

export default Form;
