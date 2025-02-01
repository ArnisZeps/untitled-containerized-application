import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from "uuid";

export async function middleware(req: NextRequest) {
    console.log(req.headers)
    const response = NextResponse.next();
    response.headers.set(
        "x-client-url",
        req.nextUrl.href
    );

    const cookieStore = await cookies();
    const hasClientId = !!cookieStore.get("clientId");

    if (!hasClientId) {
        const clientId = uuidv4();
        response.headers.set(
            "Set-Cookie",
            `clientId=${clientId}; Path=/;`
        );
    }

    return response;
}

export const config = {
    matcher: ['/'],
}