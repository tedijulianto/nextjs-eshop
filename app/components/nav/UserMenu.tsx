"use client";

import Link from "next/link";
import Avatar from "../products/Avatar";
import MenuItem from "./MenuItem";
import { useCallback, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="p-2 border border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          <Avatar />
          <FaCaretDown />
        </div>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white rounded-md shadow-md w-[170px] overflow-hidden text-sm flex flex-col cursor-pointer">
            <div>
              <Link href="/orders">
                <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
              </Link>
              <Link href="/admin">
                <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  signOut();
                }}
              >
                Logout
              </MenuItem>
            </div>
            <div>
              <Link href="/login">
                <MenuItem onClick={toggleOpen}>Sign In</MenuItem>
              </Link>
              <Link href="/register">
                <MenuItem onClick={toggleOpen}>Sign Up</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
