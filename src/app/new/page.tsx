"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

function NewPage() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await axios.post("/api/tasks", data);
    console.log(res);
    router.push("/");
  });

  return (
    <section className="h-screen flex items-center justify-center">
      <form onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-xs">
          Write a title
        </label>
        <input
          id="title"
          type="text"
          placeholder="write a title"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block mb-2"
          {...register("title")}
        />
        <label htmlFor="description" className="font-bold text-xs">
          Write a description
        </label>
        <textarea
          id="description"
          placeholder="write a description"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block w-full"
          {...register("description")}
        ></textarea>
        <button type="submit" className="bg-sky-500 px-3 py-2 rounded mt-2 ">
          Create
        </button>
      </form>
    </section>
  );
}

export default NewPage;
