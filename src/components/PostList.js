import React from "react";
import PostCard from "./PostCard";
import styles from "../css/postlist.module.css";

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <div>
        <a
          className={styles.link}
          href="http://www.centromedicomarista.com/#Especialistas"
          rel="noopener noreferrer"
        >
          Voltar Ao Site Do Centro Médico Marista
        </a>
      </div>
      <h1>Vanessa Sabel Nunes Monteiro</h1>
      <h4>Blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />;
        })}
      </div>
    </section>
  );
};

export default PostList;
