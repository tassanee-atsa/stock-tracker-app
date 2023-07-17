"use client";

import { Sidebar } from "./components/Sidebar/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ContentWrapper, Header, SidebarAndContentWrapper } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>Stock Tracker</Header>
        <SidebarAndContentWrapper>
          <Sidebar />
          <ContentWrapper>{children}</ContentWrapper>
        </SidebarAndContentWrapper>
      </body>
    </html>
  );
}
