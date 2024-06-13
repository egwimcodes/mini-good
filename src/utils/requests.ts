/* eslint-disable no-useless-catch */
import { MakeRequest } from "./axiosCall";
import { AuthRoutes } from "./authEndpoints";
import { Auth } from "../types";

async function Register({ password, username, first_name, is_premium_user, referral_code }: Auth) {
    try {
        const requestConfig = {
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
        throw error;
    }
}



export {
    Register, 
}
