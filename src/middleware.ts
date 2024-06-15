import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const response = NextResponse.next()
    const accessToken = response.cookies.get("accessToken")
    if (!accessToken) {
        response.cookies.set("accessToken", "uefhwe;pafuhiuahf;ioufh;du")
        console.log(req)
    }


    return response;
}

export const config = {
    matcher: '/'
}

