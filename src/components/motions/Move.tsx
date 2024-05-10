import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction?: "x" | "y";
  delay?: number;
  fullWidth?: boolean;
}

const AnimateMove = ({
  children,
  direction = "y",
  delay = 0.1,
  fullWidth = false,
}: Props) => {
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });

  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Box w={fullWidth ? "100%" : "auto"}>
      <motion.div
        className="box"
        initial={{ opacity: 0, [direction]: 20 }}
        animate={{ opacity: 1, [direction]: 0 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        style={{ width: "100%" }}
        children={children}
      />
    </Box>
  );
};

export default AnimateMove;
