import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center mt-12 ">
        <span className="font-bold">Digicamp</span> Dexa Group
      </h1>
      <AddTask />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-20 mt-6">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}
