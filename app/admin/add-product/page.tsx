import AddProductForm from "./AddProductForm";
import FormWrap from "@/app/components/FormWrap";
import NullData from "@/app/components/NullData";
import Container from "@/app/components/Container";
import { getCurrentUser } from "@/actions/getCurrentUser";

const AddProduct = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Access Denied!" />;
  }

  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProduct;
