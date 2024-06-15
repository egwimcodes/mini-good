import { useEffect, useState } from "react";
import { RetriveTasks } from "@/utils/requests";
import { MdNavigateNext } from "react-icons/md";
import PopUpComfirmationTask from "@/components/PopUpComfirmation";
import Image from "next/image";

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
    const [retrivedTasks, setRetrivedTasks] = useState<Task[]>([]);

    useEffect(() => {
        RetriveTasks()
            .then((tasks) => setRetrivedTasks(tasks))
            .catch(() => {
                alert('error while fetching tasks');
            });
    }, []);

    return (
        <>
            <div className="task-container w-[100%] h-[100%] overflow-y-scroll scroll-smooth bg-transparent mt-4">
                <div className="boost-btn-container h-[100%] w-[100%] flex flex-col items-center bg-transparent">
                    {retrivedTasks.map((task) => (
                        <div
                            key={task.id}
                            className="task-claim w-[95%] h-[13%] flex flex-row items-center justify-between px-2 py-2 mb-1"
                            onClick={() => setIsClaiming(true)}
                        >
                            <div className="boost-writeup flex flex-row items-center justify-center">
                                <div className="icon-container">
                                    <Image className="w-10" draggable="false" width={50} height={50} src={task.avatar} alt={task.title} />
                                </div>
                                <div className="task-writeup ml-3 flex flex-col justify-between">
                                    <h3 className="text-light font-semibold">{task.title}</h3>
                                    <div className="coin-task-container flex flex-row items-center">
                                        <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="Reward" />
                                        <h3 className="text-main text-sm ml-1">+{task.reward}</h3>
                                    </div>
                                </div>
                            </div>
                            <MdNavigateNext className="r-arrow text-2xl font-bold" />
                        </div>
                    ))}
                </div>
            </div>
            {isClaiming && <PopUpComfirmationTask isClose={() => setIsClaiming(false)} isopen={true} />}
        </>
    );
}
