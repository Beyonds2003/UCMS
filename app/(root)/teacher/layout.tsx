import type { Metadata } from "next";
import "../../globals.css";
import { Inter } from "next/font/google";
import TeacherMenu from "@/components/shared/TeacherMenu";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row`}>
        <TeacherMenu />
        <div className="h-full ml-[300px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
