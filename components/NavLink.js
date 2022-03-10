import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles/Navbar.module.css";

function NavLink({ page, active, link }) {
  const [iconRegular, setIconRegular] = useState("");
  const [iconBold, setIconBold] = useState("");
  // Load icons depending on page
  useEffect(() => {
    switch (page) {
      case "home":
        setIconRegular("heroicons-outline:home");
        setIconBold("heroicons-solid:home");

        break;
      case "sports":
        setIconRegular("bx:bx-tennis-ball");
        setIconBold("bxs:tennis-ball");

        break;
      case "cinema":
        setIconRegular("ph:film-slate-bold");
        setIconBold("ph:film-slate-bold");

        break;
      case "events":
        setIconRegular("heroicons-outline:ticket");
        setIconBold("heroicons-solid:ticket");

        break;
      case "web":
        setIconRegular("heroicons-outline:globe-alt");
        setIconBold("heroicons-solid:globe-alt");

        break;

      default:
        break;
    }
  }, [page]);

  return (
    <Link passHref href={`/${link || page}`}>
      <div className="stack">
        <Icon
          icon={active ? iconBold : iconRegular}
          className={`navBtn ${active && styles.active}`}
        />
        <p className={`${styles.link_title} ${active && styles.active}`}>{page}</p>
      </div>
    </Link>
  );
}

export default NavLink;
