import axios from "axios";
import { AppBar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function publishBlog() {
    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {title, content}, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`
        }
    });

    navigate(`/blog/${res.data.id}`)
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center pt-15">
        <div className="w-full max-w-screen-lg">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
          />
        </div>
      </div>
      <div className="flex justify-center pt-15">
        <div className="w-full max-w-screen-lg">
          <TextEditor onChange={(e) => setContent(e.target.value)}/>

          <button
            onClick={publishBlog}
            type="submit"
            className="cursor-pointer inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-0 focus:outline-none"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
        <div className="flex items-center justify-between py-4 border-b border-gray-200"></div>
        <div className="px-4 py-2 bg-white rounded-b-lg">
          <textarea
            onChange={onChange}
            rows={8}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0 focus:outline-none"
            placeholder="Write an article..." required/>
        </div>
      </div>
    </form>
  );
}
