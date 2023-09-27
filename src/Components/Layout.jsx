import React from "react";
import AgoraUI from "../Pages/Agorakit/AgoraUI";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>

      <div style={{ width: "300px", margin: "auto" }}>
        <AgoraUI />
      </div>
    </div>
  );
};

export default Layout;
