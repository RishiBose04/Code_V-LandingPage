"use client";

import { jarallax } from "jarallax";
import { useEffect } from "react";

export default function ParallaxContainer(props) {
  useEffect(() => {
    jarallax(document.querySelectorAll(".parallax-5"), {
      speed: 0.5,
    });
  }, []);
  return <div {...props}>{props.children}</div>;
}
