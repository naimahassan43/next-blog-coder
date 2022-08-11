import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from 'fs'


//step 1: Find the file corresponding to the slug
//step 2: populate them inside the page
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title} </h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug:'how-to-learn-django' }},
      { params: { slug:'how-to-learn-javascript' }},
      { params: { slug:'how-to-learn-nextjs' }},
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const {slug} = context.params

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
  return {
    props: {myBlog: JSON.parse(myBlog)}
  };
}
export default Slug;
