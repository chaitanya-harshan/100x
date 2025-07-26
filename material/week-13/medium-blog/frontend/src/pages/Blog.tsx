import { useParams } from "react-router-dom";
import { BlogPage } from "../components/BlogPage";
import { useBlog } from "../hooks"
import { Spinner } from "../components/Spinner";

export const Blog = () => {
    const {id} = useParams();
    const { loading, blog } = useBlog(id || "");
    if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <Spinner/>
    </div>;
  }

  return (
    <div>
        <BlogPage blog={blog!}/>
        {/* blog details */}
    </div>
  )
}
