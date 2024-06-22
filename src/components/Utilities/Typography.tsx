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

const RHeading = ({
  text,
  big = false,
  small,
  color,
  weight,
  textTransform,
}: Props) => {
  const fontSize = big
    ? { base: "2xl", sm: "3xl", md: "5xl", lg: "4xl" }
    : small
    ? { base: "md", sm: "lg", md: "xl", lg: "xl" }
    : { base: "lg", sm: "2xl", md: "3xl", lg: "3xl" };

  return (
    <Heading
      fontSize={fontSize}
      color={color}
      fontWeight={weight}
      textTransform={textTransform}
    >
      {text}
    </Heading>
  );
};

const RText = ({
  text,
  small = false,
  weight = "normal",
  color,
  textTransform,
}: Props) => {
  const fontSize = small
    ? { base: "xs", sm: "xs", md: "sm", lg: "sm" }
    : { base: "xs", sm: "sm", md: "md", lg: "md" };

  return (
    <Text
      fontSize={fontSize}
      fontWeight={weight}
      m={0}
      p={0}
      color={color}
      textTransform={textTransform}
    >
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
