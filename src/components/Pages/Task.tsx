import { useEffect, useState } from "react";
import { RetriveTasks } from "@/utils/requests";
import { MdNavigateNext } from "react-icons/md";
import PopUpComfirmationTask from "@/components/PopUpComfirmation";
import Image from "next/image";
import MiniPreloader from "./MiniPleloader";
import { useUserContext } from "@/hooks/UserContext";

interface Task {
    id: number;
    completed_users: { user: { id: number } }[]; // Adjust type if you know the exact type
    title: string;
    reward: number;
    task_url: string;
    avater: string; // Typo corrected from "avater"
}

export default function Task() {
    const user_id = useUserContext();
    const [isClaiming, setIsClaiming] = useState(false);
    const [retrievedTasks, setRetrievedTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
    const [stillFetching, setStillFetching] = useState<boolean>(true);

    useEffect(() => {
        RetriveTasks()
            .then((tasks) => {
                setRetrievedTasks(tasks);
                setStillFetching(false); // Set fetching to false after tasks are retrieved
            })
            .catch(() => {
                console.log('Error while fetching tasks');
                setStillFetching(false); // Set fetching to false in case of an error
            });
    }, []);

    if (stillFetching) return <MiniPreloader />;

    const selectedTaskFunc = (task: Task) => {
        setSelectedTask(task);
        setIsClaiming(true);
    };

    return (
        <>
            <div className="task-container w-full h-full overflow-y-scroll scroll-smooth bg-transparent mt-4 bg-slate-800">
                <div className="boost-btn-container h-full w-full flex flex-col items-center bg-transparent">
                    {retrievedTasks.map((task) => {
                        // const userCompleted = task.completed_users.some((user) => String(user.user.id) === String(user_id.user_id));
                        const userCompleted = task.completed_users.some((user) =>{ alert(user.user.id) ; alert(user_id.user_id)});


                        return userCompleted ? null : (
                            <div
                                key={task.id}
                                className="task-claim min-w-[95%] h-13% flex flex-row items-center justify-between px-2 py-2 mb-1 cursor-pointer"
                                onClick={() => selectedTaskFunc(task)}
                            >
                                <div className="boost-writeup flex flex-row items-center justify-center">
                                    <div className="icon-container">
                                        {task.avater && (
                                            <Image className="w-10" draggable={false} width={50} height={50} src={task.avater} alt={task.title} />
                                        )}
                                    </div>
                                    <div className="task-writeup ml-3 min-w-[60%] flex flex-col justify-between">
                                        <h3 className="text-light font-semibold">{task.title}</h3>
                                        <div className="coin-task-container flex flex-row items-center">
                                            <Image className="w-5" draggable={false} width={50} height={50} src="https://ik.imagekit.io/egwimcodes/goodcoing.png?updatedAt=1720197417578" alt="Reward" />
                                            <h3 className="text-main text-sm ml-1">+{task.reward}</h3>
                                        </div>
                                    </div>
                                </div>
                                <MdNavigateNext className="r-arrow text-2xl font-bold" />
                            </div>
                        );
                    })}
                </div>
                {isClaiming && selectedTask && (
                    <PopUpComfirmationTask
                        isClose={() => setIsClaiming(false)}
                        isopen={true}
                        title={selectedTask.title}
                        avater={selectedTask.avater}
                        reward={selectedTask.reward}
                        task_url={selectedTask.task_url}
                        content={"Are you sure you want to claim this task?"}
                        id={selectedTask.id}
                    />
                )}
            </div>
        </>
    );
}
