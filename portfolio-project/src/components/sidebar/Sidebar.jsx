import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { useState } from "react";
import {motion} from 'framer-motion'

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variansts = {
        open: 
        closed: 
    }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <div className="bg">
        <Links />
      </div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
};

export default Sidebar;
