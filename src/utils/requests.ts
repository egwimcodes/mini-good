/* eslint-disable no-useless-catch */
import { MakeRequest } from "./axiosCall";
import { AuthRoutes } from "./authEndpoints";
import { Auth } from "../types";

interface RequestConfig {
    path: string;
    method: string;
    contentType: string;
    removeAuth: boolean;
    data: Auth;
}

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

export {
    Register,
}
