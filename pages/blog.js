import Link from "next/link";
import styles from "../styles/Blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/learn-js"}>
            <h3>How to learn JavaScript in 2022?</h3>
          </Link>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            temporibus magnam at architecto dolorum nisi eaque nihil quod
            perferendis sapiente.
          </p>
        </div>
        <div className="blogItem">
          <h3>How to learn React Js in 2022?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            temporibus magnam at architecto dolorum nisi eaque nihil quod
            perferendis sapiente.
          </p>
        </div>

        <div className="blogItem">
          <h3>How to learn React Js in 2022?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            temporibus magnam at architecto dolorum nisi eaque nihil quod
            perferendis sapiente.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
