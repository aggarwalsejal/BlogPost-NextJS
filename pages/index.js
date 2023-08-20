import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="A blog post website to store the solutions for the future coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
      <h1 className={styles.title}>
        Blog Post
      </h1>
    <div className={styles.Imagewrap}>
      <Image className={styles.myImg} src="/photo-1626968361222-291e74711449.avif" alt="" width={358} height={325}></Image>
      </div>

      <p className={styles.description}>
      A blog post website to store the solutions for the future coders
      </p>
    <div className={styles.blogs}>
      <h2>Popular Blogs</h2>
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
    <div className={styles.blogs}>
      <h3>first blog</h3>
      <p>Series method to discuss small problems</p>
    </div>
      </main>
    </>
  );
}
