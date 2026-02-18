import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Simple mock validation
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // Mock success response
        // In a real app, you would validate credentials against a database
        // and sign a real JWT token.
        const mockToken = "mock-jwt-token-" + Math.random().toString(36).substring(7);

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        // Set the cookie
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
