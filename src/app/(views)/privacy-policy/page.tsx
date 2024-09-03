import { dmSans } from "@/app/fonts";
import React from "react";

export default function page() {
  return (
    <div className="container">
      <h1
        className={
          dmSans.className +
          " font-bold text-[53px] leading-[69px] text-[#2D2C3C] py-5"
        }
      >
        Privacy Policy{" "}
      </h1>
      <p className="mb-2">
        At Seat Snaps, we are committed to protecting the privacy and security
        of our {`customers'`} personal information. This Privacy Policy outlines
        how we collect, use, and safeguard your information when you visit or
        make a purchase on our website. By using our website, you consent to the
        practices described in this policy.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Information We Collect
      </h2>
      <p>
        When you visit our website, we may collect certain information about
        you, including:
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">
          Personal identification information (such as your name, email address,
          and phone number) provided voluntarily by you during the registration
          or checkout process.
        </li>
        <li className="mb-2">
          Payment and billing information necessary to process your orders,
          including credit card details, which are securely handled by trusted
          third-party payment processors.
        </li>
        <li className="mb-2">
          Browsing information, such as your IP address, browser type, and
          device information, collected automatically using cookies and similar
          technologies.
        </li>
      </ul>
      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Use of Information
      </h2>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">
          To process and fulfill your orders, including shipping and delivery.
        </li>
        <li className="mb-2">
          To communicate with you regarding your purchases, provide customer
          support, and respond to inquiries or requests.
        </li>
        <li className="mb-2">
          To personalize your shopping experience and present relevant product
          recommendations and promotions.
        </li>
        <li className="mb-2">
          To improve our website, products, and services based on your feedback
          and browsing patterns.
        </li>
        <li className="mb-2">
          To detect and prevent fraud, unauthorized activities, and abuse of our
          website.
        </li>
      </ul>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Information Sharing
      </h2>
      <p className="mb-6">
        We respect your privacy and do not sell, trade, or otherwise transfer
        your personal information to third parties without your consent, except
        in the following circumstances:
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">
          Trusted service providers: We may share your information with
          third-party service providers who assist us in operating our website,
          processing payments, and delivering products. These providers are
          contractually obligated to handle your data securely and
          confidentially.
        </li>
        <li className="mb-2">
          Legal requirements: We may disclose your information if required to do
          so by law or in response to valid legal requests or orders.
        </li>
      </ul>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Data Security
      </h2>
      <p className="mb-6">
        We implement industry-standard security measures to protect your
        personal information from unauthorized access, alteration, disclosure,
        or destruction. However, please be aware that no method of transmission
        over the internet or electronic storage is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Cookies and Tracking Technologies
      </h2>
      <p className="mb-6">
        We use cookies and similar technologies to enhance your browsing
        experience, analyze website traffic, and gather information about your
        preferences and interactions with our website. You have the option to
        disable cookies through your browser settings, but this may limit
        certain features and functionality of our website.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Changes to the Privacy Policy
      </h2>
      <p className="mb-6">
        We reserve the right to update or modify this Privacy Policy at any
        time. Any changes will be posted on this page with a revised{" "}
        {`"last updated"`} date. We encourage you to review this Privacy Policy
        periodically to stay informed about how we collect, use, and protect
        your information.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Contact Us
      </h2>
      <p className="mb-2">
        If you have any questions, concerns, or requests regarding our Privacy
        Policy or the handling of your personal information, please contact us
        using{" "}
        <a
          href="mailto:info@seatsnaps.com"
          className="text-blue-500 hover:underline"
        >
          info@seatsnaps.com
        </a>
        .
      </p>
    </div>
  );
}
