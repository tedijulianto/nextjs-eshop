import Link from "next/link";
import UserMenu from "./UserMenu";
import CartCount from "./CartCount";
import SearchBar from "./SearchBar";
import Container from "../Container";
import Categories from "./Categories";
import { Redressed } from "next/font/google";
import { getCurrentUser } from "@/actions/getCurrentUser";

const redressed = Redressed({ subsets: ["latin"], weight: "400" });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className={`${redressed.className} font-bold text-2xl`}>
              E-Shop
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
