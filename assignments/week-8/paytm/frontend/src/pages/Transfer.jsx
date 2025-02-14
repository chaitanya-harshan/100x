import { useNavigate, useSearchParams } from "react-router-dom"
import Heading from "../components/Heading"

const Transfer = () => {
    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const status = queryParams.get("status")
    var message = "Transfer Complete"  // status == 200

    if (status == 401) message = "Insufficient Balance"
    else if (status == 403) message = "Transaction Failed"

    function goToDashboard() {
        navigate("/dashboard")
    }

  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
    <div className="flex-col justify-center min-w-90 w-fit p-3 px-5 rounded-lg bg-white text-center">
        <Heading title={message}/>

        <button type="button" onClick={goToDashboard}
            className = "cursor-pointer w-full rounded bg-green-500 text-white font-semibold hover:bg-green-700 focus:outline-none py-2 my-4 focus:ring-4 focus:ring-gray-400">
                Go to Dashboard
        </button>
    </div>
    </div>
  )
}

export default Transfer