/* eslint-disable no-useless-catch */
import { MakeRequest } from "./axiosCall";
import { AuthRoutes } from "./authEndpoints";
import { Auth, AuthLogin, DailyStreakCreateType, TaskCompletionType, TopUpCreateType } from "@/types";

interface RequestConfig {
    path: string;
    method: string;
    contentType: string;
    removeAuth: boolean;
    data: Auth;
}

// Register
async function Register({ password, username, first_name, is_premium_user, referral_code }: Auth) {
    try {
        const requestConfig: RequestConfig = {
            path: AuthRoutes.REGISTER,
            method: "POST",
            contentType: "application/json",
            removeAuth: true,
            data: {
                password,
                username,
                first_name,
                is_premium_user,
                referral_code
            },
        };
        const response = await MakeRequest(requestConfig);
        return response;
    } catch (error) {
            console.log("Error during Registration: " + error); // Using console.log to show error message
            console.error("Error during registration:", error);
            throw error; // Optional: Re-throw the error to be handled by the caller
        }
    }
async function Login({ username, password }: AuthLogin) {
    try {
        const requestConfig: RequestConfig = {
            path: AuthRoutes.LOGIN,
            method: "POST",
            contentType: "application/json",
            removeAuth: true,
            data: {
                username,
                password,
            },
        };
        const response = await MakeRequest(requestConfig);
        return response;
    } catch (error) {
        return error;
    }
}
// Daily Streak

async function RetriveMe() {
    try {
    const requestMe= {
        path: AuthRoutes.ME,
        method: 'GET',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false // Assuming you need authentication
    };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error fetching Me data:', ${error}}`);
        throw error;
    }
}


async function RetriveReferrals() {
    try {
    const requestMe= {
        path: AuthRoutes.REFERRALS,
        method: 'GET',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false // Assuming you need authentication
    };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from RetriveReferrals data:', ${error}}`);
        throw error;
    }
}


async function RetriveTasks() {
    try {
    const requestMe= {
        path: AuthRoutes.TASKS,
        method: 'GET',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false // Assuming you need authentication
    };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from RetriveTasks :', ${error}}`);
        throw error;
    }
}


async function TaskCompletion({ task_id }: TaskCompletionType) {
    try {
    const requestMe= {
        path: AuthRoutes.TASKS_COMPLETE,
        method: 'POST',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false, // Assuming you need authentication
        data: {
            task_id
    },
    };
        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from RetriveTasksCompletion :', ${error}}`);
        throw error;
    }
}


async function RetriveWallet() {
    try {
    const requestMe= {
        path: AuthRoutes.WALLET,
        method: 'GET',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false // Assuming you need authentication
    };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from RetriveWallet:', ${error}}`);
        throw error;
    }
}


async function RetriveDailyStreak() {
    try {
    const requestMe= {
        path: AuthRoutes.DAILY_STREAK,
        method: 'GET',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false // Assuming you need authentication
    };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from RetrivDailyStreak:', ${error}}`);
        throw error;
    }
}



async function DailyStreakCreate({ last_checkin_date, owner }: DailyStreakCreateType) {
    try {
    const requestMe= {
        path: AuthRoutes.DAILY_STREAK,
        method: 'POST',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false, // Assuming you need authentication
        data: {
            last_checkin_date, 
            owner
    },
    };
        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from RetriveTasksCompletion :', ${error}}`);
        throw error;
    }
}


async function TopUpCreate({ amount}: TopUpCreateType) {
    try {
        const requestMe = {
            path: AuthRoutes.TOP_UP_CREATE,
            method: 'POST',
            contentType: 'application/json', // You can omit this if using the default
            removeAuth: false, // Assuming you need authentication
            data: {
                amount: amount
            },
        };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from TopUpCreate: ${error}}`);
        throw error;
    }
}


async function RetriveStats() {
    try {
    const requestMe= {
        path: AuthRoutes.STATS,
        method: 'GET',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false // Assuming you need authentication
    };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from RetrivStats', ${error}}`);
        throw error;
    }
}

async function BuyBoost({}) {
    try {
        const requestMe = {
            path: AuthRoutes.BOOSTWITHCOIN,
            method: 'POST',
            contentType: 'application/json', // You can omit this if using the default
            removeAuth: false, // Assuming you need authentication
            data: {},
        };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from Buy boost: ${error}}`);
        throw error;
    }
}

async function BuyEnergy({}) {
    try {
        const requestMe = {
            path: AuthRoutes.ENERGYWITHCOIN,
            method: 'POST',
            contentType: 'application/json', // You can omit this if using the default
            removeAuth: false, // Assuming you need authentication
            data: {},
        };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from Buy boost: ${error}}`);
        throw error;
    }
}

async function Boost_status() {
    try {
        const requestMe = {
            path: AuthRoutes.BOOSTSTATUS,
            method: 'GET',
            contentType: 'application/json', // You can omit this if using the default
            removeAuth: false, // Assuming you need authentication
        };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        console.log(`{'Error from BOOST STATUS: ${error}}`);
        throw error;
    }
}

export {
    Register,
    Login,
    RetriveMe,
    RetriveReferrals,
    RetriveTasks,
    TaskCompletion,
    RetriveWallet,
    RetriveDailyStreak,
    DailyStreakCreate,
    TopUpCreate,
    RetriveStats,
    BuyBoost,
    BuyEnergy,
    Boost_status
}
