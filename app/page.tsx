import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import Image from "next/image";
import { db } from "@/db";
const getData = async () => {
  const tasks = await db.task.findMany();
  return { tasks };
};
export default async function Home() {
  const { tasks } = await getData();
  return (
    <div>
      <h1 className="text-2xl text-center mt-12 ">
        <span className="font-bold">Digicamp</span> Dexa Group
      </h1>
      <AddTask />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-20 mt-6">
        {tasks.length !== 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p>no data, please add some task</p>
        )}
      </div>
    </div>
  );
}
