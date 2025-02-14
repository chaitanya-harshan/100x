import { useState } from "react"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from 'axios'

const SendMoney = () => {
    const [amount, setAmount] = useState(0)
    const [queryParams] = useSearchParams()
    const navigate = useNavigate()

    const toId = queryParams.get('id')
    const name = queryParams.get('name')
    const userIconLetter = name[0].toUpperCase()

    function transferMoney() {
        axios.post("http://localhost:3000/api/v1/account/transfer", {
            to: toId, amount: amount
        },{
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        })
        .then(res => navigate("/transfer?status=200"))
        .catch((err) => {
            if (err.response.status === 401) navigate("/transfer?status=401")
            else if (err.response.status === 403) navigate("/transfer?status=403")
        })
    } 

  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
    <div className="flex-col justify-center min-w-90 w-fit p-3 px-5 rounded-lg bg-white text-center">
        <Heading title={"Send Money"}/>

        <div className="flex mt-8">
            <div className="h-10 w-10 rounded-full flex justify-center items-center bg-green-400">
                <div className="text-3xl font-medium h-fit w-fit pb-1">
                    {userIconLetter}
                </div>
            </div>
            <div className="text-xl font-bold ml-7 flex items-center">
                {name}
            </div>
        </div>

        <InputBox label={"Amount in ₹"} placeholder={"Enter amount"} setState={setAmount}/>

        <button type="button" onClick={transferMoney}
            className = "cursor-pointer w-full rounded bg-green-500 text-white font-semibold hover:bg-green-700 focus:outline-none py-2 my-4 focus:ring-4 focus:ring-gray-400">
                Initiate Transfer
        </button>
    </div>
    </div>
  )
}

export default SendMoney