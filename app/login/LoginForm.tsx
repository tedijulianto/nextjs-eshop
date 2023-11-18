"use client";

import Link from "next/link";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Sign Up for E-Shop" />
      <Button outline label="Continue with Google" icon={FaGoogle} onClick={() => {}} />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="password"
        required
      />
      <Button label={isLoading ? "Loading" : "Sign In"} onClick={handleSubmit(onSubmit)} />
      <p className="text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-sky-500 underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
