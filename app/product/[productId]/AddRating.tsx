"use client";

import axios from "axios";
import toast from "react-hot-toast";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import { useState } from "react";
import { safeUser } from "@/types";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { Order, Product, Review } from "@prisma/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface AddRatingProps {
  product: Product & {
    reviews: Review[];
  };
  user:
    | (safeUser & {
        orders: Order[];
      })
    | null;
}

const AddRating: React.FC<AddRatingProps> = ({ product, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      comment: "",
      rating: 0,
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (data.rating === 0) {
      setIsLoading(false);
      return toast.error("Please add rating");
    }

    const ratingData = { ...data, userId: user?.id, product };

    axios
      .post("/api/rating", ratingData)
      .then(() => {
        toast.success("Review added successfully");
        router.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!user || !product) return null;

  const deliveredOrder = user?.orders.some(
    (order) =>
      order.products.find((item) => item.id === product.id) && order.deliveryStatus === "delivered"
  );

  const userReview = product?.reviews.find((review: Review) => {
    return review.userId === user.id;
  });

  if (userReview || !deliveredOrder) return null;

  return (
    <div className="flex flex-col gap-2 max-w-[500px] mb-4">
      <Heading title="Rate this product" />
      <Rating onChange={(event, newValue) => setCustomValue("rating", newValue)} />
      <Input
        id="comment"
        label="Your Review"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button label={isLoading ? "Loading" : "Post Review"} onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default AddRating;
