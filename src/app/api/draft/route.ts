import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";
import { draftMode, cookies } from "next/headers";
import StoryblokClient from "storyblok-js-client";
import { redirect } from "next/navigation";
import type { SbPageResult } from "@/configs/types";
import { checkForGlobalSlug } from "@/lib/storyblok";

export async function GET(req: NextRequest) {
  // Parse query string parameters
  const { searchParams } = req.nextUrl;
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const sbVersion = searchParams.get("_storyblok_published");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== env.DRAFT_SECRET_TOKEN) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  } else if (sbVersion) {
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

  const storyblok = new StoryblokClient({ accessToken: env.STORYBLOK_TOKEN });
  const { data } = (await storyblok.get(`cdn/stories/${slug || "home"}`, {
    version: "draft",
    excluding_fields: "header,body,seo",
  })) as unknown as SbPageResult;

  if (!data?.story) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();
  cookies()
    .getAll()
    .forEach((cookie) => {
      cookies().set(cookie.name, cookie.value, {
        sameSite: "none",
        secure: true,
      });
    });

  // Redirect to the path from the fetched post
  redirect(checkForGlobalSlug(slug) ? "/" : `/${slug}`);
}
