"use client";

import { useLayoutEffect } from "react";
import Hero from "@/components/hero/hero";
import OurServices from "@/components/services/our-services";
import Help from "@/components/help/help";
import Achievements from "@/components/achievements/achievements";
import Reviews from "@/components/reviews/reviews";
import Form from "@/components/form/form";
import fadeAnimation from "@/animation";

export default function Home() {
  useLayoutEffect(() => {
    const revertFunc = fadeAnimation();
    return () => revertFunc();
  }, []);

  return (
    <>
      <Hero />
      <OurServices />
      <Help />
      <Achievements />
      <Reviews />
      <Form />
    </>
  );
}
