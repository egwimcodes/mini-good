import { useState } from "react";
import Image from "next/image";
import Task from "./Task";
import DailyRewards from "./DailyRewards";
import Boost from "./Boost";

export default function TaskPage() {
    const [active, setActive] = useState('dailyrewards');
    return (
        <>
            <div className="taskpage-container h-[90vh] w-[100%] flex flex-col items-center  justify-between ">



                <div className="h-[10vh] w-[80vw] border-2 border-orange-400 rounded-full">
                    <div
                        className={`min-w-[100%]  button-nav-bg down border-x-slate-800 border-y-slate-800 border-3 h-[10vh]  rounded-full flex items-center justify-evenly`}
                    >
                        <div
                            className={`buttom-btn rounded-[20px] down h-10 w-20 ${active === 'task' ? 'active' : ''} flex flex-col items-center justify-center`}
                            onClick={() => setActive('task')}

                        >
                            <p className="text-light text-xs font-bold">Task</p>
                        </div>
                        <div
                            className={`buttom-btn rounded-[20px] down h-10 w-20 ${active === 'dailyrewards' ? 'active' : ''} flex flex-col items-center justify-center `}
                            onClick={() => setActive('dailyrewards')}

                        >
                            <p className="text-light text-xs font-bold">Daily</p>
                        </div>
                        <div
                            className={`buttom-btn rounded-[20px] down h-10 w-20 ${active === 'boost' ? 'active' : ''} flex flex-col items-center justify-center`}
                            onClick={() => setActive('boost')}

                        >
                            <p className="text-light text-xs font-bold">Boost</p>
                        </div>


                    </div>
                </div>

                {/* Top nav start    */}
                <div className="taskpage-content h-[80vh] w-screen overflow-y-scroll scroll-smooth ">
                    {active === 'task' && <Task />}
                    {active === 'dailyrewards' && <DailyRewards />}
                    {active === 'boost' && <Boost />}
                </div>

                {/* Top nav end */}
            </div>

        </>
    );
}
