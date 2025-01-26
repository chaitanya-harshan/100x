import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import axios from "axios"

const Dashboard = () => {
    const [balance, setBalance] = useState(0)
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then((res) => {
            setBalance(res.data.balance)
            console.log(res.data.balance);
        })
    },[])

  return (
    <div>
        <Appbar/>
        <div className="mx-10">
            <Balance balance={balance.toLocaleString()}/>
            <Users/>
        </div>
    </div>
  )
}

export default Dashboard