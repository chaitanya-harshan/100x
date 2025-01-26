
const Appbar = () => {
  return (
    <div className="text-xl font-medium m-2 p-2 flex justify-between rounded-lg border-2 border-gray-200 shadow-md">
        <div className="ml-3 flex items-center">
            PayTM App
        </div>
        <div className="flex justify-between w-28 mr-3">
            <div className="flex items-center">
                Hello
            </div>
            <div className="bg-slate-300 h-12 w-12 rounded-full flex justify-center items-center">
                <div className="text-3xl text-violet-600">
                    U
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appbar