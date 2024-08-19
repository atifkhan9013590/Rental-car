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

   const scrollToForm = (element) => {
     const formElement = document.getElementById(element);
     if (formElement) {
      setshowsidebar(false)
       formElement.scrollIntoView({ behavior: "smooth" });
     }
   };

  return (
    (showsidebar || animateClose) && (
      <div className="sidebar">
        <div className={showsidebar ? "sidebar-content" : "sidebarss"}>
          <span className="closed" onClick={() => setshowsidebar(false)}>
            &times;
          </span>
          <div className="sidebar-links">
            <div onClick={() => scrollToForm("landing")}>Home</div>
            <div onClick={() => scrollToForm("display")}>About</div>
            <div onClick={() => scrollToForm("allls")}>Vehicle Model</div>
            <div onClick={() => scrollToForm("Footer")}>Contact</div>
            <div onClick={() => scrollToForm("Review")}>Testimonials</div>
          </div>
        </div>
      </div>
    )
  );
}

export default Sidebar;
