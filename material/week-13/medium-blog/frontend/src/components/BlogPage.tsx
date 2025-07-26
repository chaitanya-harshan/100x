import type { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./Avatar";

export const BlogPage = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-20">
          <div className="col-span-8">
            <div className="text-4xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-4">
              Posted on 2nd December 2025
            </div>
            <div className="pt-5 ">{blog.content}</div>
          </div>

          <div className="col-span-4 ml-5 pt-2">
            <div className="text-slate-600 text-lg">
                Author
            </div>
            <div className="flex w-full pt-4">
              <div className="mr-2">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>

              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-500">
                  Translating the silent symphony of the cosmos into words, I
                  turn galaxies into narratives and starlight into
                  curiosity—inviting every reader to uncover the wonders hidden
                  beyond our night sky.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
