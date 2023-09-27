import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
