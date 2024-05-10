import { Heading, Text } from "@chakra-ui/react";
import * as CSS from "csstype";

interface Props {
  text: string;
  big?: boolean;
  small?: boolean;
  weight?: "normal" | "bold" | "bolder" | "semibold";
  color?: "white" | "gray" | string;
  nowrap?: boolean;
  textTransform?: CSS.Property.TextTransform;
}

const RHeading = ({ text, big = false, small, color }: Props) => {
  const fontSize = big
    ? { base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }
    : small
    ? { base: "md", sm: "lg", md: "xl", lg: "2xl" }
    : { base: "lg", sm: "2xl", md: "3xl", lg: "4xl" };

  return (
    <Heading fontSize={fontSize} color={color}>
      {text}
    </Heading>
  );
};

const RText = ({ text, small = false, weight = "normal", color }: Props) => {
  const fontSize = small
    ? { base: "xs", sm: "xs", md: "sm", lg: "sm" }
    : { base: "xs", sm: "sm", md: "md", lg: "lg" };

  return (
    <Text fontSize={fontSize} fontWeight={weight} m={0} p={0} color={color}>
      {text}
    </Text>
  );
};
const Label = ({
  text,
  color,
  weight = "normal",
  nowrap = false,
  textTransform,
}: Props) => (
  <Text
    fontSize={{ base: "xs", sm: "xs", md: "sm", lg: "sm" }}
    fontWeight={weight}
    color={color}
    m={0}
    p={0}
    whiteSpace={nowrap ? "nowrap" : "normal"}
    textTransform={textTransform}
  >
    {text}
  </Text>
);

export { RHeading, RText, Label };
