import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const response = NextResponse.next()
    const accessToken = response.cookies.get("accessToken")
    if (!accessToken) {
        return null;
    }
    return response;
}

export const config = {
    matcher: '/'
}

