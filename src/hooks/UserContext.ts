import { createContext, useContext } from "react";
import {UserData} from "@/types";

export const UserContext = createContext<UserData | undefined>(undefined)

export function useUserContext() {
    const user = useContext(UserContext);

    if (!user) {
       alert("UserContext is undefined in useUserContext function");
       throw new Error("UserContext is undefined");
    }
    return user
}