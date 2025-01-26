import { useEffect, useState } from "react"
import InputBox from "./InputBox"
import User from "./User"
import axios from "axios"

const Users = () => {
    const [filter, setFilter] = useState("")
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk/?filter="+filter, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then((response) => setUsers(response.data.users))
    }, [filter])

  return (
    <div>
        <InputBox label={"Users :"} placeholder={"Search users"} setState={setFilter}/>
        {/* <User user={{
            firstName: "Elon",
            lastName: "Musk",
            username: "elon@mars.spaceX.yeet",
            _id: "cbi49iucw434nsk" 
        }}/> */}
        {users.map((user, index) => (
            <User key={index} user={user}/>
        ))}
    </div>
  )
}

export default Users