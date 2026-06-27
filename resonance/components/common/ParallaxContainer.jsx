"use client";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/Parallax"),
  { ssr: false }
);

export default ParallaxContainer;
