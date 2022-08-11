/* eslint-disable react/jsx-key */
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import * as fs from 'fs'


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

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: {allBlogs}
  };
}
export default BlogPage;
