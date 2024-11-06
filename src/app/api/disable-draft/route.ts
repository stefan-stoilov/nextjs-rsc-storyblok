import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { checkForGlobalSlug } from "@/lib/storyblok";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const slug = searchParams.get("slug");

  draftMode().disable();
  cookies()
    .getAll()
    .forEach((cookie) => {
      cookies().set(cookie.name, cookie.value, {
        sameSite: "none",
        secure: true,
      });
    });

  redirect(checkForGlobalSlug(slug) ? "/" : `/${slug}`);
}
