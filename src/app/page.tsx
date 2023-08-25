import { prisma } from "@/libs/prisma";

async function loadTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);
  return (
    <div className="grid grid-cols-3 gap-3 mt-5">
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-900 p-3">
          <h1 className="font-bold text-xl">{task.title}</h1>
          <p className="to-slate-300">{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
