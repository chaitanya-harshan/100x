import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { SignupInput } from '@chaitanya_harshan/medium-common'
import { Input } from "../components/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"


export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [userInputs, setUserInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function sendRequest() {
        setLoading(true);
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, userInputs)
            const jwt = res.data.jwt;
            localStorage.setItem("token", `Bearer ${jwt}`)
            navigate("/blogs")
        } catch (e: any) {
            alert("Error: Please check your credentials and try again.")
            console.log(e.message)
        } finally {
            setLoading(false);
        }

    }

  return (
    <div className="h-screen flex flex-col justify-center items-center">

        <div className="w-90">
            <div className="text-3xl font-extrabold px-10 text-center">
                {type === "signup" ? "Create an Account": "Sign In"}
            </div>
            <div className="text-md text-center text-slate-400 pb-5">
                {type === "signup" ? "Already have an account?": "Don't have an account?"}
                <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>
                    {type === "signup" ? "Sign In" : "Sign Up"}</Link>
            </div>

            {type === "signup" && <Input label="Username" placeholder="Enter your username" onChange={(e) => setUserInputs({...userInputs, name: e.target.value})}/>}
            <Input label="Email" placeholder="m@example.com" onChange={(e) => setUserInputs({...userInputs, email: e.target.value})}/>
            <Input label="Password"  type="password" placeholder="" onChange={(e) => setUserInputs({...userInputs, password: e.target.value})}/>

            <button onClick={sendRequest} disabled={loading} type="button" className="w-full mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:bg-gray-500">{loading ? "Loading..." : (type === "signup" ? "Sign Up" : "Sign In")}</button>

        </div>
    </div>
  )
}
