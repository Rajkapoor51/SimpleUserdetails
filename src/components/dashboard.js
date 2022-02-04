import React from "react";
import { useUserContext } from "../context/userContext";
import Navbar from "../sidemenu/Navbar";
import { SidebarItem } from "../sidemenu/SidebarItem";


const Dashboard = (props) => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>

  
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Dashboard;