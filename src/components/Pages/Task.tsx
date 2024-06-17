import { useEffect, useState } from "react";
import { RetriveTasks } from "@/utils/requests";
import { MdNavigateNext } from "react-icons/md";
import PopUpComfirmationTask from "@/components/PopUpComfirmation";
import Image from "next/image";
import MiniPleloader from "./MiniPleloader";

interface Task {
    id: number;
    completed_users: []; // Adjust type if you know the exact type
    title: string;
    reward: number;
    task_url: string;
    avatar: string; // Typo corrected from "avater"
}

export default function Task() {
    const [isClaiming, setIsClaiming] = useState(false);
    const [retrievedTasks, setRetrievedTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
    const [stillFetching, setStillFetching] = useState<boolean>(true);

    useEffect(() => {
        RetriveTasks()
            .then((tasks) => setRetrievedTasks(tasks))
            .catch(() => {
                alert('Error while fetching tasks');
            });
        setStillFetching(false);
    }, []);

    const selectedTaskFunc = (task: Task) => {
        setSelectedTask(task);
        setIsClaiming(true);
    };

    return (
        <>
            {stillFetching ?
                <MiniPleloader />
                : <div className="task-container w-full h-full overflow-y-scroll scroll-smooth bg-transparent mt-4 bg-slate-800">
                    <div className="boost-btn-container h-full w-full flex flex-col items-center bg-transparent">
                        {retrievedTasks.map((task) => (
                            <div
                                key={task.id}
                                className="task-claim min-w-[95%] h-13% flex flex-row items-center justify-between px-2 py-2 mb-1 cursor-pointer"
                                onClick={() => selectedTaskFunc(task)}
                            >
                                <div className="boost-writeup flex flex-row items-center justify-center">
                                    <div className="icon-container">
                                        <Image className="w-10" draggable={false} width={50} height={50} src={task.avatar} alt={task.title} />
                                    </div>
                                    <div className="task-writeup ml-3 flex flex-col justify-between">
                                        <h3 className="text-light font-semibold">{task.title}</h3>
                                        <div className="coin-task-container flex flex-row items-center">
                                            <Image className="w-5" draggable={false} width={50} height={50} src="/good-coin.png" alt="Reward" />
                                            <h3 className="text-main text-sm ml-1">+{task.reward}</h3>
                                        </div>
                                    </div>
                                </div>
                                <MdNavigateNext className="r-arrow text-2xl font-bold" />
                            </div>
                        ))}
                    </div>
                    {isClaiming && selectedTask && (
                        <PopUpComfirmationTask
                            isClose={() => setIsClaiming(false)}
                            isopen={true}
                            title={selectedTask.title}
                            avatar={selectedTask.avatar}
                            reward={selectedTask.reward}
                            content={"Are you sure you want to claim this task?"}
                        />
                    )}
                </div>
            }
        </>
    );
}
