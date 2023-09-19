
import "../globals.css";
import { ToastContainer } from "@/components/clients/nextToast/toastContainer";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { AuthContextProvider } from "@/context/authContext";
import ReactQueryProvider from "@/components/clients/providers/reactQueryProvider";
import HeaderDashboard from "@/components/Header/headerDashboard";





export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  


  
  
  return (
    <html lang="en">
      <body className="overflow-x-hidden inset-0">
        <AuthContextProvider>
          <ReactQueryProvider >
           <HeaderDashboard/>
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