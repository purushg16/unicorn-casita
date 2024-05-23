import { Box, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";

const PrivacyPolicyPage = () => {
  return (
    <VStack pb={8} align="start" gap={8} px={{ base: 4, md: 8, lg: 16 }}>
      <VStack align="start" gap={0}>
        <RText text="Privacy Policy" weight="bolder" color="primary.700" />
        <RText
          text="(Last updated on May 19, 2024)"
          small
          color="primary.700"
        />
      </VStack>
      <RText
        text={`Unicorn Casita is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.unicorncasita.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.`}
      />
      <VStack align="start">
        <RText text="Collection of Information" color="primary.700" />
        <Box textDecor="underline">
          <RText text="We may collect information about you in a variety of ways. The information we may collect on the Site includes:" />
        </Box>
      </VStack>
      <VStack align="start">
        <RText text="Personal Data" color="primary.700" />
        <RText
          text={`Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you choose to participate in various activities related to the Site, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however, your refusal to do so may prevent you from using certain features of the Site.`}
        />
      </VStack>
      <VStack align="start">
        <RText text="Use of Information" color="primary.700" />
        <RText
          text={`We use personal information collected via our Site for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.`}
        />
      </VStack>
      <Box textDecor="underline">
        <RText text="We use the information we collect or receive:" />
      </Box>
      <RText
        text={`To send you marketing and promotional communications. We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our marketing emails at any time (see the "What Are Your Privacy Rights" below).
          `}
      />
      <RText text="Sharing of Information" color="primary.700" />
      <RText
        text={`We may share information we have collected about you in certain situations. Your information may be disclosed as follows:`}
      />
      <VStack align="start">
        <RText text="By Law or to Protect Rights" color="primary.700" />
        <RText
          text={`If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.`}
        />
      </VStack>
      <VStack align="start">
        <RText text="Third-Party Websites" color="primary.700" />
        <RText
          text={`Our Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Site.`}
        />
      </VStack>
    </VStack>
  );
};

export default PrivacyPolicyPage;
