import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/Layout.module.css";
import { useEffect, useState } from "react";

/* Capitalize every word: 
  str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
*/

/**
 * Check which page this is, and pass the appropriate data
 * i.e
 * 1. Page Title in Header ✔ ✅
 */

function Layout({ children }) {
  // Absolute path logic
  const router = useRouter();
  const pageArray = router.asPath.split("/");
  const page = pageArray[pageArray.length - 1];
  const rawPage = page.split("-").join(" ");
  const pageName = rawPage.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  const [currentPage, setCurrentPage] = useState(`${page}`);

  useEffect(() => {
    setCurrentPage(`${page}`);
  }, [currentPage, page]);

  const pageCheck = ["upload", ""];

  return (
    <>
      <Head>
        <title>{currentPage === "" ? "Ticket Express" : pageName}</title>
        <link rel="icon" href="/tx_smooth_b.svg" />
      </Head>
      {!pageCheck.includes(currentPage) && (
        <header>
          <div className={styles.header}>
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
            <Link passHref href="/upload">
              <p className={styles.upload_link}>Upload</p>
            </Link>
          </div>
        </header>
      )}
      <main className={!pageCheck.includes(currentPage) ? "main" : undefined}>
        {children}
      </main>
    </>
  );
}

export default Layout;
