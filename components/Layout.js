import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/Layout.module.css";

/* Capitalize every word: 
  str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
*/

/**
 * Check which page this is, and pass the appropriate data
 * i.e
 * 1. Active Link Icon
 * 2. Page Title in Header ✔ ✅
 */

function Layout({ children }) {
  // Absolute path logic
  const router = useRouter();
  const page = router.asPath.split("/").at(-1);
  const rawPage = page.replaceAll('-', ' ')
  const pageName = rawPage.replace(/(^\w|\s\w)/g, m => m.toUpperCase())

  return (
    <>
      <Head>
        <title>{pageName}</title>
        <link rel="icon" href="/tx_smooth_b.svg" />
      </Head>
      <header className={styles.header}>
        <Link passHref href="/home">
          <div className={`image cursor-pointer ${styles.logo}`}>
            <Image
              src="/tx_smooth_b.svg"
              alt="Ticket Express Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <h1>{pageName}</h1>
      </header>
      <main className="main">{children}</main>
    </>
  );
}

export default Layout;
