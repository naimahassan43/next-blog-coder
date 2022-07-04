import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at,
          aspernatur ad voluptate exercitationem totam consequuntur velit? Vero,
          recusandae. Quis ducimus natus fugiat veniam aliquid quae hic
          voluptates corporis? Explicabo esse suscipit perspiciatis dolores
          necessitatibus placeat possimus magni ducimus minus!
        </div>
      </main>
    </div>
  );
};

export default slug;
