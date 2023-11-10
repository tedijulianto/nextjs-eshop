import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  const product = products.find((item) => item.id === params.productId);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div>add rating</div>
        <ListRating product={product} />
      </Container>
    </div>
  );
};
export default Product;
