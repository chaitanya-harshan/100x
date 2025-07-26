import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface blogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id?: string;
}

export const BlogCard = ({ authorName, title, content, publishedDate, id,}: blogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>

      <div className="border-b-1 pb-4 border-slate-200 w-screen max-w-xl py-4 cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-1">
            <Circle />
          </div>
          <div className="font-thin text-slate-400 pl-2 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 200)}...</div>
        <div className="text-slate-500 font-thin pt-4 flex justify-end pr-2">
          {`${Math.ceil(content.length / 200)} min read`}
        </div>
      </div>
    </Link>
  );
};

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}
