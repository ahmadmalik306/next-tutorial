import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Layout</h1>
      {children}
    </>
  );
};

export default Layout;
