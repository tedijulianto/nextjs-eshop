"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { RiShoppingCartFill } from "react-icons/ri";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();

  return (
    <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
      <div className="text-3xl">
        <RiShoppingCartFill />
      </div>

      {cartTotalQty === 0 ? null : (
        <span className="absolute -top-1 -right-1 text-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {cartTotalQty}
        </span>
      )}
    </div>
  );
};

export default CartCount;
