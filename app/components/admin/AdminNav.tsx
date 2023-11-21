"use client";

import Link from "next/link";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import { usePathname } from "next/navigation";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href="/admin">
            <AdminNavItem selected={pathname === "/admin"} icon={MdDashboard} label="Dashboard" />
          </Link>
          <Link href="/admin/add-product">
            <AdminNavItem
              selected={pathname === "/admin/add-product"}
              icon={MdLibraryAdd}
              label="Add Product"
            />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavItem
              selected={pathname === "/admin/manage-products"}
              icon={MdDns}
              label="Manage Products"
            />
          </Link>
          <Link href="/admin/manage-orders">
            <AdminNavItem
              selected={pathname === "/admin/manage-orders"}
              icon={MdFormatListBulleted}
              label="Manage Orders"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
