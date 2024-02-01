// import "./globals.css";
import ThemeProviderWrapper from "@/providers/theme-provider/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Viewport } from "next";
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProviderWrapper>
        <body>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </ThemeProviderWrapper>
    </html>
  );
}
