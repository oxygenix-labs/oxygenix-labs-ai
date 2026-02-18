import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Mock success response
        const mockToken = "mock-jwt-token-" + Math.random().toString(36).substring(7);

        const response = NextResponse.json({
            message: "Signup successful",
            success: true,
        });

        response.cookies.set("token", mockToken, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
