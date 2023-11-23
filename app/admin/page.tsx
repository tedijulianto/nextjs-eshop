import Dashboard from "./Dashboard";
import getOrders from "@/actions/getOrders";
import getProducts from "@/actions/getProducts";
import getUsers from "@/actions/getUsers";
import Container from "../components/Container";
import getGraphData from "@/actions/getGraphData";
import BarGraph from "./BarGraph";

const Admin = async () => {
  const orders = await getOrders();
  const products = await getProducts({ category: null });
  const users = await getUsers();
  const graphData = await getGraphData();

  return (
    <div className="pt-8">
      <Container>
        <Dashboard orders={orders} products={products} users={users} />
        <div className="mt-4 mx-auto max-w-[1150px]">
          <BarGraph data={graphData} />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
