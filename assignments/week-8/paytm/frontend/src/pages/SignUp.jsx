import { useState } from "react"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  async function handleSubmit() {
    const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
      username,
      password,
      firstName,
      lastName
    })
    localStorage.setItem("jwt", res.data.token) // Storing the JWT in local storage
    navigate("/dashboard")
    console.log(res.data);
  }

  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
    <div className="flex-col justify-center w-80 p-3 px-5 rounded-lg bg-white text-center">
        <Heading title={"Sign Up"}/>
        <SubHeading text={"Enter your information to create an account"} />
        <InputBox label={"First Name"} placeholder={"John"} setState={setFirstName}/>
        <InputBox label={"Last Name"} placeholder={"Snow"} setState={setLastName}/>
        <InputBox label={"Email"} placeholder={"aegon@targaryen.com"} setState={setUsername}/>
        <InputBox label={"Password"} placeholder={""} setState={setPassword}/>
        <Button label={"Sign Up"} onClick={handleSubmit}/>
        <BottomWarning text={"Already have an account?"} linkText={"Login"} to={"/signin"}/>
    </div>
    </div>
  )
}

export default SignUp