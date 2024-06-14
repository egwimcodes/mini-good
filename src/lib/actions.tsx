"use server"
import { sessionOptions } from "@/lib/cookieAuth"
import { getIronSession } from "iron-session"
import { UserData } from "@/types"
import { cookies } from "next/headers"

export const getSession = async () => {
    const session = await getIronSession<UserData>(cookies(), sessionOptions)
    return session;
}
export const login = async () => {
    const session = getSession()
    const sessionData = await session
    if (sessionData) {
        alert(`Session from func ${sessionData}`)
    }


}