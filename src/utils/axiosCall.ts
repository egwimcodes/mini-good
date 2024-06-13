/* eslint-disable no-useless-catch */
import Axios from "axios";
import { ApiRequestConfig } from "@/types";

const SERVER_HOST =  "https://clownfish-app-lqqur.ondigitalocean.app";
const SERVER_VERSION = "v1";
const baseURL: string = `${SERVER_HOST}`;

export async function MakeRequest(
    requestObj: ApiRequestConfig,
    config = {}
) {
    // Destructure properties from requestObj
    try {
        const { path, data, method, contentType, removeAuth } = requestObj;

        let token: string | null = null;
        if (!removeAuth) {

            // const tokenData = await getItem("userData"); 
            // token = tokenData !== null ? JSON.parse(tokenData).token.access : null;
            // alert(token)

            const tokenData = localStorage.getItem("authitem");
            alert(`tokenData: ${tokenData}`)
            token = tokenData !== null ? JSON.parse(tokenData).access_token : null;
        }

        // Set up headers
        const headers = {
            Authorization: removeAuth ? "No Auth" : token ? `Bearer ${token}` : "No Auth",
            Accept: "application/json",
            "Content-Type": contentType ? contentType : "application/json;charset=UTF-8",
        };

        const url = `${baseURL}/api/${SERVER_VERSION}${path}`;

        const response = await Axios({ url, method, headers, data, ...config });

        // Check response status and return result
        if (response.status === 200 || response.status === 201) {
            const result = response && response.data;
            return result;
        }
    } catch (e) {
        throw e
    }


}
