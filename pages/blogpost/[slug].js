import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return   <div className={styles.conatainer}>
  <main className={styles.main}>
    <h1>Title of the page {slug}</h1>
    <hr />
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus ipsam voluptas consequuntur architecto perspiciatis magnam dolorem, praesentium obcaecati quaerat aliquam eius accusantium!
    </div>
    </main>
    </div>;
};

export default slug;

