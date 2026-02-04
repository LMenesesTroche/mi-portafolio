import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useScrollSlide(direction: "left" | "right" = "left") {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.4],
    direction === "left" ? [-120, 0] : [120, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.96, 1]);

  return { ref, x, opacity, scale };
}
