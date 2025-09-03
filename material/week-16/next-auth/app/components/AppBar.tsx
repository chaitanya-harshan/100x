"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export const AppBar = () => {
  const session = useSession();

  return (
    <div>
        <button onClick={() => {
            signIn();
        }}>Sigin</button>

        <br />
        <button onClick={() => {
            signOut();
        }}>LogOut</button>

        <br /><br />
        {"Rendered on Client Side"}<br />
        {"Client Component ----- "}
        {JSON.stringify(session)}
    </div>
  )
}
