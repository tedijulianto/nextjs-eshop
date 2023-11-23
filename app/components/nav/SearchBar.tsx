"use client";

import queryString from "query-string";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.search) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: { search: data.search },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center">
      <input
        {...register("search")}
        type="text"
        autoComplete="off"
        placeholder="Search here"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="p-2 bg-slate-500 text-white rounded-r-md hover:opacity-80"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
