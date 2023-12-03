"use client";

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { safeUser } from "@/types";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

interface RegisterFormProps {
  currentUser: safeUser | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
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
    console.log(data);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            setTimeout(() => {
              router.push("/");
              router.refresh();
              toast.success(`Welcome ${data.name}`);
            }, 2000);
          }

          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Heading title="Sign Up for E-Shop" />
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
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
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
              "Sign Up"
            )
          }
          onClick={() => {}}
          disabled={isLoading}
        />
      </form>
      <p className="text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-sky-500 underline">
          Sign In
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
