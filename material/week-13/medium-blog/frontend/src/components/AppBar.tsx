import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const AppBar = () => {
  return (
    <div className="shadow-md rounded-lg flex justify-between items-center px-10 py-4 m-3">
      <Link to={"/blogs"}>
        <div className="cursor-pointer">Medium</div>
      </Link>

      <div>
        <Link to={"/publish"}>
          <button type="button" className="mr-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Publish</button>
        </Link>
        <Avatar name="Chaitanya" size="big" />
      </div>
    </div>
  );
};
