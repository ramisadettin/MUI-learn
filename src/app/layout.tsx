import DashboardContentWrapper from "@/components/layout/dashboard-content-wrapper/DashboardContentWrapper";
import "../style/global.css";
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
          <AppRouterCacheProvider>
            <DashboardContentWrapper>{children}</DashboardContentWrapper>
          </AppRouterCacheProvider>
        </body>
      </ThemeProviderWrapper>
    </html>
  );
}
