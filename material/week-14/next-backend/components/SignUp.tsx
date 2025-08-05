"use client"

import axios from "axios"
import { ChangeEventHandler, FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/api/user", { username, password })
      router.push("/")
    } catch (err) {
      console.error("Signup failed:", err)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
        autoComplete="on"
      >
        <h1 className="text-3xl font-extrabold text-center mb-6">Sign up</h1>

        <LabelledInput
          label="Username"
          type="email"
          placeholder="you@example.com"
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <LabelledInput
          label="Password"
          type="password"
          placeholder="12345678"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="mt-6 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

interface LabelledInputProps {
  label: string
  placeholder: string
  type?: string
  autoComplete?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

function LabelledInput({ label,placeholder,type = "text",autoComplete,onChange }: LabelledInputProps) {
  return (
    <div className="mb-4">

      <label className="block mb-1 text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        onChange={onChange}
        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
