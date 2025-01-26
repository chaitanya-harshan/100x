
const Balance = ({balance}) => {
  return (
    <div className="flex text-lg py-5 border-b-2 border-gray-300">
        <div className="font-bold pl-2">
            Your Balance :
        </div>
        <div className="font-semibold pl-4">
            {`₹ ${balance}`}
        </div>
    </div>
  )
}

export default Balance