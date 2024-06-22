import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest } from "next/server"

export async function middleware(req) {
    const res = NextRequest.next();
    const supabase = createMiddlewareClient({req, res})

    await supabase.auth.getSession();
    return res;

}

