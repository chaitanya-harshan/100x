export const BlogSkeleton = () => {
  return (
    <div className="border-b border-slate-200 w-full max-w-xl py-4 px-4 animate-pulse cursor-wait">
    {/* header: avatar + meta dots */}
    <div className="flex items-center space-x-2">
      <div className="h-6 w-6 rounded-full bg-slate-300" />
      <div className="h-4 w-24 bg-slate-300 rounded" />
      <div className="h-1 w-1 bg-slate-300 rounded-full" />
      <div className="h-4 w-16 bg-slate-300 rounded" />
    </div>

    {/* title */}
    <div className="mt-3 h-6 w-3/4 bg-slate-300 rounded" />

    {/* content preview */}
    <div className="mt-2 space-y-2">
      <div className="h-4 bg-slate-300 rounded" />
      <div className="h-4 bg-slate-300 rounded w-5/6" />
      <div className="h-4 bg-slate-300 rounded w-1/2" />
    </div>

    {/* read‑time */}
    <div className="mt-4 h-4 w-20 bg-slate-300 rounded ml-auto" />
  </div>
  );
};


// export const BlogCard = ({ authorName, title, content, publishedDate, id,}: blogCardProps) => {
//   return (
//     <Link to={`/blog/${id}`}>

//       <div className="border-b-1 pb-4 border-slate-200 w-screen max-w-xl py-4 cursor-pointer">
//         <div className="flex">
//           <Avatar name={authorName} />
//           <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
//             {authorName}
//           </div>
//           <div className="flex justify-center flex-col pl-1">
//             <Circle />
//           </div>
//           <div className="font-thin text-slate-400 pl-2 text-sm flex justify-center flex-col">
//             {publishedDate}
//           </div>
//         </div>
//         <div className="text-xl font-semibold pt-2">{title}</div>
//         <div className="text-md font-thin">{content.slice(0, 200)}...</div>
//         <div className="text-slate-500 font-thin pt-4 flex justify-end pr-2">
//           {`${Math.ceil(content.length / 200)} min read`}
//         </div>
//       </div>
//     </Link>
//   );
// };

// function Circle() {
//   return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
// }