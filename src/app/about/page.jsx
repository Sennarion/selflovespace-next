"use client";

import { useLayoutEffect } from "react";
import AboutUs from "@/components/about-us/about-us";
import fadeAnimation from "@/animation";

export default function About() {
  useLayoutEffect(() => {
    const revertFunc = fadeAnimation();
    return () => revertFunc();
  }, []);

  return <AboutUs />;
}
