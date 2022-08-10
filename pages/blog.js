/* eslint-disable react/jsx-key */
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

//step 1: Collect all the files from blogdata directory
//step 2: Iterate through them and display them
//http://localhost:3000/api/blogs

const BlogPage = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlogs(parsed);
  //     });
  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        {blogs.map((blogItem) => {
          return (
            <div className={styles.blogItem} key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3>
              </Link>
              <p>{blogItem.content.substr(0, 140)}...</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()
  return {
    props: {allBlogs}
  };
}
export default BlogPage;
