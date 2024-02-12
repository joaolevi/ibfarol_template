import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiUser, FiUsers } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";
import { MdDashboard, MdOutlineReviews } from "react-icons/md";
import { TbBookOff, TbBookUpload, TbBooks, TbLogout2 } from "react-icons/tb";
import { TfiLayoutListThumb, TfiList } from "react-icons/tfi";
import { NavLink, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import { getAuth } from 'firebase/auth';
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const memberMenuItems = [
  {
    title: "Inscrições",
    path: "#",
    icon: <MdDashboard />,
  },
  {
    title: "Pagamentos",
    path: "#",
    icon: <LuFileClock />,
  }
];

const PerfilSidebar = ({ setActiveTab }) => {
  const location = useLocation();
  const { user } = useAuth()
  const toastId = React.useRef(null);
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClick = (index) => {
    // Atualizar o estado activeTab com o índice clicado
    setActiveTab(index);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    
    if (auth.currentUser) {
      try {
        await signOut(auth);
        navigate('/login');
        toast.success("Deslogado", { id: toastId });
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
        toast.error("Logout failed! Please try again.");
      }
    } else {
      console.warn('Usuário não autenticado ao tentar fazer logout.');
    }
  };

  return (
    <div
      className={`group invisible fixed left-0 top-0 z-50 h-full w-full opacity-0 backdrop-blur-[2px] duration-300 lg:visible lg:static lg:opacity-100 [&.active]:visible [&.active]:opacity-100 [&.active]:duration-100 ${
        false ? "active" : ""
      }`}
      onClick={(e) => e.target.classList.contains("group") && setSidebarOpen(false)}
    >
      <aside className="sidebar h-full w-64 -translate-x-full duration-300 group-[&.active]:-translate-x-0 lg:w-full lg:-translate-x-0">
        <div className="sidebarContent h-[calc(100vh-64px)] overflow-y-auto pb-5 sm:h-[calc(100vh-80px)] sm:pb-10">
          {user && (
            <>
              <p className="px-8 py-4 text-xs font-medium uppercase text-primary">
                Menu
              </p>
              <nav className="flex flex-col gap-1 sm:gap-1.5">
                {memberMenuItems.map(({ title}, index) => (
                  <button
                    className={`dashboardMenu flex items-center gap-3 border-white px-8 py-3 font-light text-[#808080] duration-300 hover:bg-[#FEF2E2] hover:text-primary sm:py-3.5 sm:text-base [&.active]:border-r-4 [&.active]:border-primary [&.active]:bg-[#FEF2E2] [&.active]:text-primary`}
                    onClick={() => handleClick(index)}
                    key={index}
                  >
                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary duration-300 group-[&.active]:w-12 group-[&:not(.active):hover]:w-full"></span>
                    {title}
                </button>
                ))}
                <hr className="border-gray-200/70" />

                <button
                  className="flex items-center gap-3 px-8 py-3 text-[#808080] duration-300 hover:text-primary"
                  onClick={handleLogout}
                >
                  <span className="text-xl">
                    <TbLogout2 />
                  </span>
                  <span className="text-sm duration-300">Logout</span>
                </button>
              </nav>
            </>
          )}
          {!user && (
            <div className="flex h-full items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default PerfilSidebar;
