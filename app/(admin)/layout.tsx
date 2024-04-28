import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { AuthContextProvider } from "@/context/authContext";
import ReactQueryProvider from "@/components/clients/providers/reactQueryProvider";
import LayouAdmintDashboard from "@/components/Header/admin/layoutAdminDashboard";
import ToastifyContainer from "@/components/clients/providers/toastifyContainer";

export const metadata: Metadata = {
  title: "admin",
  description: "It is a startup application in the field of discount, advertisement and online menu, which is an idea of ​​mine. This application creates an identity card for each business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden min-h-screen h-max inset-0 bg-sky-100">
        <AuthContextProvider>
          <ReactQueryProvider>
            <LayouAdmintDashboard />
            {children}
            <ToastifyContainer />
          </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
