import { VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../Utilities/Typography";

const AboutPage = () => {
  return (
    <VStack gap={8} align="start" px={{ base: 4, md: 8, lg: 16 }}>
      <RHeading
        weight="bold"
        text="Welcome to Unicorn Casita!"
        color="primary.800"
      />
      <RText text="Unicorn Casita is a labor of love born from a passion for creativity and a desire to spread joy. We've embarked on a whimsical journey crafting handmade ornaments designed to delight girls and ladies alike." />
      <RText text="Our story began with a simple idea: to infuse a touch of magic into everyday life through unique and enchanting creations. What started as a humble endeavor has blossomed into a thriving community of unicorn enthusiasts and dreamers." />
      <RText text="At Unicorn Casita, each ornament is lovingly handcrafted with meticulous attention to detail. From sparkling unicorns to shimmering rainbows, every piece is a testament to our commitment to quality and imagination." />
      <RText text="We believe that every girl and lady deserves to feel special, and our ornaments are designed to do just that. Whether it's a gift for a loved one or a treat for yourself, our creations are sure to bring a sprinkle of joy into your life." />
      <RText text="Thank you for joining us on this magical journey. We invite you to explore our website, discover our whimsical creations, and let your imagination take flight with Unicorn Casita." />
      <RText text="Let's spread a little sparkle together!" />
      <VStack gap={0} align="start">
        <RText text="With love," />
        <RText text="Janani Arumugam" color="primary.800" weight="bold" />
        <RText text="Founder, Unicorn Casita" small />
      </VStack>
    </VStack>
  );
};

export default AboutPage;
