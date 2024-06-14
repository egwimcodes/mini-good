/* eslint-disable no-useless-catch */
import { MakeRequest } from "./axiosCall";
import { AuthRoutes } from "./authEndpoints";
import { Auth, DailySteakCreate } from "@/types";

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

// Daily Streak

async function GetDailyStreakCreate(data: DailySteakCreate) {
    const requestObj = {
        path: '/daily-streak/',
        method: 'POST',
        contentType: 'application/json', // You can omit this if using the default
        data: data,
        removeAuth: false // Assuming you need authentication
    };

    try {
        const response = await MakeRequest(requestObj);
        return response;
    } catch (error) {
        console.error('Error fetching daily streak data:', error);
        throw error;
    }
}


















export {
    Register,
    GetDailyStreakCreate
}
