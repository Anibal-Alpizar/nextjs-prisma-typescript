"use client";

import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";

function TaskCard({ task }: { task: Task }) {
  const router = useRouter();
  return (
    <div
      className="bg-gray-900 p-3 hover:bg-gray-800 hover:cursor-pointer"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <h1 className="font-bold text-xl">{task.title}</h1>
      <p className="to-slate-300">{task.description}</p>
    </div>
  );
}

export default TaskCard;
