"use client";

import moment from "moment";
import OrderItem from "./OrderItem";
import Status from "@/app/components/Status";
import Heading from "@/app/components/Heading";
import { formatPrice } from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Order Details" />
      </div>
      <div>Order Id: {order.id}</div>
      <div>
        Total Amount: <span className="font-bold">{formatPrice(order.amount / 100)}</span>
      </div>
      <div className="flex items-center gap-2">
        <div>Delivery Status</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="Pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="Dispatched"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status text="Delivered" icon={MdDone} bg="bg-green-200" color="text-green-700" />
          ) : undefined}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>Payment Status</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="PENDING"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
            <Status text="PAID" icon={MdDone} bg="bg-green-200" color="text-green-700" />
          ) : undefined}
        </div>
      </div>
      <div>Date: {moment(order.createDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Products ordered</h2>
        <div className="grid grid-cols-5 text-xs gap-4 py-2 font-semibold items-center border-t-[1.5px] border-b-[1.5px] border-slate-200">
          <div className="col-span-2 justify-self-start">PRODUCT</div>
          <div className="justify-self-center">PRICE</div>
          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        {order.products.map((item) => {
          return <OrderItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default OrderDetails;
