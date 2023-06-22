"use client";

import { useLayoutEffect } from "react";
import Retreats from "@/components/retreats/retreats";
import Sessions from "@/components/sessions/sessions";
import Consultations from "@/components/consultations/consultations";
import Psychotherapy from "@/components/psychotherapy/psychotherapy";
import BodyTherapy from "@/components/body-therapy/body-therapy";
import fadeAnimation from "@/animation";

export default function Services() {
  useLayoutEffect(() => {
    const revertFunc = fadeAnimation();
    return () => revertFunc();
  }, []);

  return (
    <>
      <Retreats />
      <Sessions />
      <Consultations />
      <Psychotherapy />
      <BodyTherapy />
    </>
  );
}
