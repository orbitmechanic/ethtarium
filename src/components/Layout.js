import React from "react";
import styles from "../styles/main.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <>this shuld wrap all the pages</>
      <div className={styles.layout}>
        <Header />
        <div className={styles.main}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
