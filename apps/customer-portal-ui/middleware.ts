import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from "uuid";

export async function middleware() {
    const cookieStore = await cookies()
    const hasClientId = !!cookieStore.get("clientId")

    const response = NextResponse.next();

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
    matcher: '/',
}