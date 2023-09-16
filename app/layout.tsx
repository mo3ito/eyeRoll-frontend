import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "@/components/clients/nextToast/toastContainer";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { AuthContextProvider } from "@/context/authContext";
import ReactQueryProvider from "@/components/clients/providers/reactQueryProvider";
import HeaderBusinessOwner from "@/components/Header/headerBusinessOwner";



export const metadata: Metadata = {
  title: "Discount App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className="">
        <AuthContextProvider>
          <ReactQueryProvider >
            <HeaderBusinessOwner/>
        {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
