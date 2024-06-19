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
        alert("Error during registration: " + error); // Using alert to show error message
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
        alert(`{'Error fetching daily streak data:', ${error}}`);
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
        alert(`{'Error from RetriveReferrals data:', ${error}}`);
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
        alert(`{'Error from RetriveTasks :', ${error}}`);
        throw error;
    }
}


async function TaskCompletion({ title, reward, task_url, avater }: TaskCompletionType) {
    try {
    const requestMe= {
        path: AuthRoutes.TASKS_COMPLETE,
        method: 'POST',
        contentType: 'application/json', // You can omit this if using the default
        removeAuth: false, // Assuming you need authentication
        data: {
            title, 
            reward, 
            task_url, 
            avater
    },
    };
        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        alert(`{'Error from RetriveTasksCompletion :', ${error}}`);
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
        alert(`{'Error from RetriveWallet:', ${error}}`);
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
        alert(`{'Error from RetrivDailyStreak:', ${error}}`);
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
        alert(`{'Error from RetriveTasksCompletion :', ${error}}`);
        throw error;
    }
}


async function TopUpCreate(topUpData: TopUpCreateType) {
    try {
        const requestMe = {
            path: AuthRoutes.TOP_UP_CREATE,
            method: 'POST',
            contentType: 'application/json', // You can omit this if using the default
            removeAuth: false, // Assuming you need authentication
            data: {
                id: topUpData.id,
                is_admin: topUpData.is_admin,
                coins_to_level_up: topUpData.coins_to_level_up,
                can_upgrade_bot: topUpData.can_upgrade_bot,
                daily_income: topUpData.daily_income,
                last_login: topUpData.last_login?.toISOString(), // Convert Date to string if it's a Date object
                is_superuser: topUpData.is_superuser,
                first_name: topUpData.first_name,
                last_name: topUpData.last_name,
                email: topUpData.email,
                is_active: topUpData.is_active,
                date_joined: topUpData.date_joined?.toISOString(), // Convert Date to string if it's a Date object
                date_added: topUpData.date_added?.toISOString(), // Convert Date to string if it's a Date object
                date_last_updated: topUpData.date_last_updated?.toISOString(), // Convert Date to string if it's a Date object
                username: topUpData.username,
                account_type: topUpData.account_type,
                user_id: topUpData.user_id,
                balance: topUpData.balance,
                tap_energy_level: topUpData.tap_energy_level,
                tap_energy: topUpData.tap_energy,
                rank: topUpData.rank,
                earn_per_tap_level: topUpData.earn_per_tap_level,
                earn_per_tap: topUpData.earn_per_tap,
                profit_per_hour: topUpData.profit_per_hour,
                bot_level: topUpData.bot_level,
                is_suspended: topUpData.is_suspended,
                suspend_expiry_date: topUpData.suspend_expiry_date?.toISOString(), // Convert Date to string if it's a Date object
                suspend_duration_in_minutes: topUpData.suspend_duration_in_minutes,
                referral_code: topUpData.referral_code,
                referrer_id: topUpData.referrer_id,
                is_invited: topUpData.is_invited,
                address: topUpData.address,
                is_premium_user: topUpData.is_premium_user
            },
        };

        const response = await MakeRequest(requestMe);
        return response;
    } catch (error) {
        alert(`{'Error from TopUpCreate: ${error}}`);
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
    TopUpCreate
}
