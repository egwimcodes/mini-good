import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
    const cookie = req.cookies.get("AccessToken");
    console.log("Token",cookie)

    return NextResponse.next();
}