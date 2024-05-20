import { Rating, Heart, ItemStyles } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import primaryColor from "../../../theme/primaryColor";
import { HStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";

const myStyles = {
  itemShapes: Heart,
  activeFillColor: primaryColor[800],
  inactiveFillColor: primaryColor[300],
  activeStrokeColor: primaryColor[900],
} as ItemStyles;

const RatingShower = ({ value }: { value: number }) => {
  return (
    <HStack>
      <Rating
        itemStyles={myStyles}
        style={{ maxWidth: 120, color: "primary.800" }}
        value={value}
        isDisabled
        readOnly
      />
      <RText small text={`(${value})`} color="primary.800" weight="bold" />
    </HStack>
  );
};

export default RatingShower;
