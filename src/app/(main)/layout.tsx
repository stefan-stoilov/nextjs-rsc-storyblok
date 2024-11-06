import { env } from "@/env";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import { ThemeProvider } from "@/components/providers";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "NextJS Storyblok",
  description: "NextJS App Router with Storyblok CMS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

storyblokInit({
  accessToken: env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed right-4 top-4">
            <ThemeSwitcher />
          </div>
        </ThemeProvider>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
