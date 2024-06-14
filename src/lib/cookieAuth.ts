import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
    cookieName: "good-session",
    password: "UE5D6@9yV2sTH$P'r+&S>8",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" 
    }
}