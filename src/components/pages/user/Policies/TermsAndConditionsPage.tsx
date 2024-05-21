import { VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";

const TermsAndConditionsPage = () => {
  return (
    <VStack pb={8} align="start" gap={8}>
      <VStack align="start" gap={0}>
        <RText text="Terms and Condition" weight="bolder" color="primary.700" />
        <RText
          text="(Last updated on May 19, 2024)"
          small
          color="primary.700"
        />
      </VStack>
      <RText
        text={`For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean JANANI ARUMUGAM, whose registered/operational office is 408/1, mariyappan nagar, diwan thottam, Kamaraj nagar colony, ammapet Salem TAMIL NADU 636014 . "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.`}
      />
      <RText text="Your use of the website and/or purchase from us are governed by following Terms and Conditions:" />
      <RText text="The content of the pages of this website is subject to change without notice." />
      <RText text="Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law." />
      <RText text="Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements." />
      <RText text="Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions." />
      <RText text="All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website." />
      <RText text="Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense." />
      <RText text="From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information." />
      <RText text="You may not create a link to our website from another website or document without JANANI ARUMUGAM’s prior written consent." />
      <RText text="Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India." />
      <RText text="We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time." />
    </VStack>
  );
};

export default TermsAndConditionsPage;
