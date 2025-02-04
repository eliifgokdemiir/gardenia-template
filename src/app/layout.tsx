import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";
import "../style/home-four.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "sonner";
import UseMousePointer from "@/utils/MouseCursorUtilis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="home-four-theme">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Mazali Patisserie & Coffee" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/assets/img/logo/mazali-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/logo/mazali-icon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/logo/mazali-icon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/logo/mazali-icon-180x180.png" />
          <link rel="manifest" href="/site.manifest" />
          <meta name="theme-color" content="#1a581d" />
          <title>Mazâli Patisserie & Coffee</title>
        </head>

        <body suppressHydrationWarning={true}>
          {/* Use the UseMousePointer component */}
            <UseMousePointer />
          <ReduxProvider>
            <AppProvider>
              {children}
            </AppProvider>
             <Toaster position="top-center" richColors/>
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
