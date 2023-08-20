import React from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={styles.conatainer}>
      <main className={styles.main}>
      <h2>Popular Blogs</h2>
    <div className={styles.blogs}>
     <Link href={'/blogpost/learn-javascript'}>
      <h3>first blog</h3></Link>
      <p>Series method to discuss small problems</p>
    </div>
    <div className={styles.blogs}>
      <h3>first blog</h3>
      <p>Series method to discuss small problems</p>
    </div>
    <div className={styles.blogs}>
      <h3>first blog</h3>
      <p>Series method to discuss small problems</p>
    </div>
    <div className={styles.blogs}>
      <h3>first blog</h3>
      <p>Series method to discuss small problems</p>
    </div>
    </main>
    </div>
  )
}

export default Blog
