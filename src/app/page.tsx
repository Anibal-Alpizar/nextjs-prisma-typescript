import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

const loadTasks = async () => {
  return await prisma.task.findMany();
};

export const dynamic = 'force-dynamic'

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
