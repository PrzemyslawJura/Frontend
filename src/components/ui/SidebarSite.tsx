import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export function SidebarSite({activeSidebarItem}:any) {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItemsOne = [
    { href: "/Transactions", icon: HiChartPie, label: "Transactions", className: "text-lg hover:bg-gray-200", number: "0" },
    { href: "/Warehouses", icon: HiViewBoards, label: "Warehouses", className: "text-lg hover:bg-gray-200", number: "1" },
    { href: "/Products", icon: HiInbox, label: "Products", className: "text-lg hover:bg-gray-200", number: "2" },
    { href: "/Workers", icon: HiUser, label: "Workers", className: "text-lg hover:bg-gray-200", number: "3" },
    { href: "/WarehouseRacks", icon: HiTable, label: "Warehouse Racks", className: "text-lg hover:bg-gray-200", number: "4" },
  ];  

  const sidebarItemsTwo = [
    { href: "#", icon: HiChartPie, label: "Magazin raports", className: "text-lg hover:bg-gray-200", number: "5" },
    { href: "#", icon: HiUser, label: "Workers transactions", className: "text-lg hover:bg-gray-200", number: "6" },
    { href: "#", icon: HiInbox, label: "Products raports", className: "text-lg hover:bg-gray-200", number: "7" },
    { href: "#", icon: HiViewBoards, label: "Warehouse free space", className: "text-lg hover:bg-gray-200", number: "8" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(true);
  };

  const toggleSidebarFalse = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={toggleSidebar} type="button" className="bg-white border inline-flex items-center p-2 fixed left-2 top-[80px] z-40 ms-3 text-2xl text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <FaBars />
      </button>

      <Sidebar className={`fixed left-0 top-16 z-50 w-72 transition-transform ${
                            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                          } lg:translate-x-0`} aria-label="Sidebar with content separator example">
        <Sidebar.Items className="mt-3">
          <Sidebar.ItemGroup>
            <Sidebar.Item icon= {FaXmark} className="text-lg hover:bg-red-300 lg:hidden cursor-pointer" onClick={toggleSidebarFalse}>
              Hide menu
            </Sidebar.Item>
            {sidebarItemsOne.map((item, index) => (
              <Sidebar.Item
                key={index}
                href={item.href}
                icon={item.icon}
                className={`${item.className} ${item.number === activeSidebarItem ? 'bg-slate-300' : ''}`}
              >
                {item.label}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            {sidebarItemsTwo.map((item, index) => (
              <Sidebar.Item
                key={index}
                href={item.href}
                icon={item.icon}
                className={`${item.className} ${item.number === activeSidebarItem ? 'bg-slate-300' : ''}`}
              >
                {item.label}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className="mb-40">
            <Sidebar.Item href="/" icon={IoMdExit} className="text-lg hover:bg-gray-200">
              Log out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
