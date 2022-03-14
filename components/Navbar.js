import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Toggle from "./Toggle";
import { useEffect, useState } from "react";
import styles from "./styles/Navbar.module.css";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function NavbarBottom() {
  /**
   * Check which page this is, and pass the appropriate Active Link Icon
   */
  const router = useRouter();
  const pageArray = router.asPath.split("/");
  const page = pageArray[pageArray.length - 1];

  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(`${page}`);

  useEffect(() => {
    setCurrentPage(`${page}`);
  }, [currentPage, page]);

  const pageCheck = ["upload", ""];

  // Hide navbar if on 'index' or 'upload' page
  return (
    !pageCheck.includes(currentPage) && (
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <div className={styles.navbar_container}>
          <div className="flex justify-around items-center py-3 w-full">
            {/* Home */}
            <NavLink page="home" active={currentPage === "home"} />
            {/* Sports */}
            <NavLink page="sports" active={currentPage === "sports"} />
            {/* Cinema */}
            <NavLink page="cinema" active={currentPage === "cinema"} />
            {/* Events */}
            <NavLink page="events" active={currentPage === "events"} />
            {/* Web */}
            <NavLink
              page="web"
              active={currentPage === "webevents"}
              link="webevents"
            />
          </div>
        </div>
      </motion.nav>
    )
  );
}

export default NavbarBottom;
