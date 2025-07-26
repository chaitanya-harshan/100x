import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
  "id": string,
  "title": string,
  "content": string,
  "published": false,
  "authorId": string,
  "author": {
    "name": string,
    "email": string
  }
}

// export const useBlog = ({id} : {id: string}) => {
export const useBlog = (id : string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      });
  }, []);

  return { loading, blog };
};


export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      });
  }, []);

  return { loading, blogs };
};
