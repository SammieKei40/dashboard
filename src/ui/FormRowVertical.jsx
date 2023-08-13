/* eslint-disable react/prop-types */

export default function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex flex-col gap-3 p-5">
        {label && <label className="font-bold text-left text-3xl" htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span className="text text-2xl text-red-700">{error}</span>}
    </div>
  )
}
