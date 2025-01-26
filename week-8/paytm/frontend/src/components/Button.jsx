
const Button = ({label, onClick}) => {
  return (
    // <div type="button"
    // className="rounded bg-black text-white font-semibold hover:bg-gray-900 focus:outline-none py-2 my-4 focus:ring-4 focus:ring-gray-400"
    // onClick={onClick}
    // >
    //     {label}
    // </div>
    <button type="button" onClick={onClick}
    className = "cursor-pointer w-full rounded bg-black text-white font-semibold hover:bg-gray-900 focus:outline-none py-2 my-4 focus:ring-4 focus:ring-gray-400">
        {label}
    </button>
  )
}

export default Button