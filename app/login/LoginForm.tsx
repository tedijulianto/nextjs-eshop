"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { safeUser } from "@/types";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

interface LoginFormProps {
  currentUser: safeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
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

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/");
        router.refresh();
        toast.success("Login successful");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <>
      <Heading title="Sign In for E-Shop" />
      <Button
        outline
        label="Continue with Google"
        icon={FaGoogle}
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
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
        <Button
          label={
            isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              "Sign In"
            )
          }
          onClick={() => {}}
          disabled={isLoading}
        />
      </form>
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
