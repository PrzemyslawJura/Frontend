import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export function SidebarSite() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="text-center text-2xl font-bold">
            Warehouse
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Transaction
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Warehouse
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Workers
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Warehouse Racks
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Magazin raports
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Workers transactions
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Products raports
          </Sidebar.Item>
          <Sidebar.ItemGroup className="text-center text-2xl font-bold">
            Warehouses free space
        </Sidebar.ItemGroup>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
