import React from "react";

const Layout = () => {
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
