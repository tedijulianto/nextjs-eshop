"use client";

import Image from "next/image";
import { CartProductType } from "@prisma/client";
import { truncateText } from "@/utils/truncateText";
import { formatPrice } from "@/utils/formatPrice";

interface OrderItemProps {
  item: CartProductType;
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-b-[1.5px] border-slate-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <div className="relative aspect-square w-[70px]">
          <Image
            src={item.selectedImg.image}
            fill
            alt={item.name}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div>{truncateText(item.name)}</div>
          <div>{item.selectedImg.color}</div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">{item.quantity}</div>
      <div className="justify-self-end font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default OrderItem;
