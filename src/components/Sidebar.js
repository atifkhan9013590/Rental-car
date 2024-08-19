import React, { useState, useEffect } from "react";
import "./Sidebar.css";

function Sidebar({ showsidebar, setshowsidebar }) {
  const [animateClose, setAnimateClose] = useState(false);

  useEffect(() => {
    if (!showsidebar) {
      setAnimateClose(true);
      const timer = setTimeout(() => {
        setAnimateClose(false);
      }, 400); 

      return () => clearTimeout(timer);
    }
  }, [showsidebar]);

  return (
    (showsidebar || animateClose) && (
      <div className="sidebar">
        <div className={showsidebar ? "sidebar-content" : "sidebarss"}>
          <span className="closed" onClick={() => setshowsidebar(false)}>
            &times;
          </span>
          <div className="sidebar-links">
            <div>Home</div>
            <div>About</div>
            <div>Vehicle Model</div>
            <div>Contact</div>
            <div>Testimonials</div>
            <div>Our Team</div>
          </div>
        </div>
      </div>
    )
  );
}

export default Sidebar;
