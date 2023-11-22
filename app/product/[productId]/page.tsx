import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);

  if (!product) {
    return <NullData title="Oops! There is no product" />;
  }

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
