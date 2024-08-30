import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );
  const path = request.nextUrl.pathname;
  const publicPath =
    path === "/forgot-password" ||
    path.startsWith("/auth") ||
    path === "/reset-password" ||
    path === "/login";

  const homePath = path === "/";

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !publicPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (!user && homePath) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && publicPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/workspace/profile";
    return NextResponse.redirect(url);
  }

  if (user && homePath) {
    const url = request.nextUrl.clone();
    url.pathname = "/workspace/profile";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
