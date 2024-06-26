import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { AuthContextProvider } from "@/context/authContext";
import ReactQueryProvider from "@/components/clients/providers/reactQueryProvider";
import HomePageHeader from "@/components/Header/homePageHeader";
import ToTop from "@/components/toTop/toTop";
import ToastifyContainer from "@/components/clients/providers/toastifyContainer";

export const metadata: Metadata = {
  title: "EyeRoll",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden inset-0 min-h-screen h-max w-screen bg-sky-100">
        <AuthContextProvider>
          <ReactQueryProvider>
            <HomePageHeader />
            {children}
            <ToastifyContainer />
          </ReactQueryProvider>
        </AuthContextProvider>
        <ToTop />
      </body>
    </html>
  );
}
