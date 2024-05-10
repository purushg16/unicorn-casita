import { ForwardedRef, ReactNode, forwardRef } from "react";
import SildeableFlex from "../../../Utilities/SildeableFlex";

interface Props {
  children: ReactNode[];
  ref: React.RefObject<HTMLDivElement>;
  onScroll: () => void;
}

const SwiperContainer = forwardRef(
  ({ children, onScroll }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    // Slideable Flex is different component.
    return <SildeableFlex ref={ref} children={children} onScroll={onScroll} />;
  }
);

export default SwiperContainer;
