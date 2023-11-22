"use client";

import Container from "../Container";
import Category from "./Category";
import { categories } from "@/utils/Categories";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-center flex-row pt-4 justify-between overflow-x-auto">
          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label || (category === null && item.label === "All")}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
