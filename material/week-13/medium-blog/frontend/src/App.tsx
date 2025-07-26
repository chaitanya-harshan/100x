import {BrowserRouter, Route, Routes} from "react-router-dom"
import { SignUp } from "./pages/Signup"
import { SignIn } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { Blog } from "./pages/Blog"
import { Publish } from "./pages/Publish"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/publish" element={<Publish />} />
    </Routes>
    </BrowserRouter>   
    </>
  )
}

export default App
