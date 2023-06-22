"use client";

import { useState } from "react";
import "modern-normalize/modern-normalize.css";
import "../styles/global.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Popup from "@/components/popup/popup";
import { raleway } from "@/fonts/fonts";
import { checkCookies } from "@/utils/cookies";

export default function RootLayout({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(checkCookies());

  return (
    <html lang="en">
      <head>
        <title>Self Love Space</title>
        <meta
          name="keywords"
          content="Self-care, Psychological well-being, Mental health workshop, Personal growth, Self-care techniques, Mental health retreat, Mind-body connection, Wellness retreat, Dance and mental health, Work-life balance, Resilience building"
        />
      </head>
      <body className={raleway.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
      </body>
    </html>
  );
}
