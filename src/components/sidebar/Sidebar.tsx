import "./Sidebar.scss";
import logo from "../../assets/img/logo.png";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type SidebarProps = {
  isSidebarOpen: boolean;
};

function Sidebar({ isSidebarOpen }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(isSidebarOpen);
  return (
    <>
      <nav className="sidebar-container">
        <div className="sidebar-header">
          <figure>
            <img src={logo} />
          </figure>
          <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence>
              {isOpen ? (
                <motion.span
                  key="left"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: -90 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  style={{ x: 50, rotate: 50 }}
                  transformTemplate={
                    ({ x, rotate }) => `rotate(${rotate}%) translateX(${x}%)`
                  }
                >
                  <SlArrowLeft />
                </motion.span>
              ) : (
                <motion.span
                  key="right"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: -90   }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                  style={{ x: 50, rotate: 50 }}
                  transformTemplate={
                    ({ x, rotate }) => `rotate(${rotate}%) translateX(${x}%)`
                  }
                >
                  <SlArrowRight />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <ul>
          <li>
            <a href="#">Calendar</a>
          </li>
          <li>
            <a href="#">Meeting</a>
          </li>
          <li>
            <a href="#">To do List</a>
          </li>
        </ul>
        <div>
          <figure></figure>
          <div>
            <span>Marcin</span>
            <span>marcin123@aabc.com</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
