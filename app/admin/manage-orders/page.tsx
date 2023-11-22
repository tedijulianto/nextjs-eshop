import Container from "@/app/components/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import NullData from "@/app/components/NullData";
import getOrders from "@/actions/getOrders";
import { getCurrentUser } from "@/actions/getCurrentUser";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Access Denied!" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
