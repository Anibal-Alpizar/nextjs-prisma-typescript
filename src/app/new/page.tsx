"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function NewPage({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      });
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      await axios.post("/api/tasks", data);
    }

    router.push("/");
    router.refresh();
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
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-sky-500 px-3 py-2 rounded-md mt-2 "
          >
            {params.id ? "Update" : "Create"}
          </button>
          <button
            type="button"
            className="bg-red-500 px-3 py-2 rounded-md mt-2 ml-2"
            onClick={async () => {
              if (confirm("Are you sure you want to delete this task?")) {
                await axios.delete(`/api/tasks/${params.id}`);
                router.push("/");
                router.refresh();
              }
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewPage;
