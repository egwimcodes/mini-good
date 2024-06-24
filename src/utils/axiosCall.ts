/* eslint-disable no-useless-catch */
import Axios from "axios";
import { ApiRequestConfig } from "@/types";
import { fetchAccessToken } from "./api";

//const SERVER_HOST = "https://clownfish-app-lqqur.ondigitalocean.app";
const SERVER_HOST =  "http://195.35.1.248";
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
          
            const accessToken = await fetchAccessToken();
            const tokenData = accessToken.data.accessToken.value;
            token = tokenData !== null ? tokenData : null;
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
        }else {
            throw new Error(`Request failed with status code ${response.status}`);
        }

    } catch (e) {
        throw e
    }


}
