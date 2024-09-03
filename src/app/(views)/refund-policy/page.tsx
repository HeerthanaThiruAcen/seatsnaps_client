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
        Refund Policy{" "}
      </h1>
      <p className="mb-6">
        Thank you for shopping at Seat Snaps. We value your satisfaction and
        strive to provide you with the best online shopping experience possible.
        If, for any reason, you are not completely satisfied with your purchase,
        we are here to help.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Returns
      </h2>
      <p className="mb-6">
        We accept returns within <strong>7 days</strong> from the date of
        purchase. To be eligible for a return, your item must be unused and in
        the same condition that you received it. It must also be in the original
        packaging.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Refunds
      </h2>
      <p className="mb-6">
        Once we receive your return and inspect the item, we will notify you of
        the status of your refund. If your return is approved, we will initiate
        a refund to your original method of payment. Please note that the refund
        amount will exclude any shipping charges incurred during the initial
        purchase.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Exchanges
      </h2>
      <p className="mb-6">
        If you would like to exchange your item for a different size, color, or
        style, please contact our customer support team within{" "}
        <strong>7 days</strong> of receiving your order. We will provide you
        with further instructions on how to proceed with the exchange.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Non-Returnable Items
      </h2>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">Gift cards</li>
        <li className="mb-2">Downloadable software products</li>
        <li className="mb-2">Personalized or custom-made items</li>
        <li className="mb-2">Perishable goods</li>
      </ul>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Damaged or Defective Items
      </h2>
      <p className="mb-6">
        In the unfortunate event that your item arrives damaged or defective,
        please contact us immediately. We will arrange for a replacement or
        issue a refund, depending on your preference and product availability.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Return Shipping
      </h2>
      <p className="mb-6">
        You will be responsible for paying the shipping costs for returning your
        item unless the return is due to our error (e.g., wrong item shipped,
        defective product). In such cases, we will provide you with a prepaid
        shipping label.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Processing Time
      </h2>
      <p className="mb-6">
        Refunds and exchanges will be processed within{" "}
        <strong>7 business days</strong> after we receive your returned item.
        Please note that it may take additional time for the refund to appear in
        your account, depending on your payment provider.
      </p>

      <h2
        className={`${dmSans.className} font-bold text-2xl text-gray-900 mb-4`}
      >
        Contact Us
      </h2>
      <p className="mb-2">
        If you have any questions or concerns regarding our refund policy,
        please contact our customer support team. We are here to assist you and
        ensure your shopping experience with us is enjoyable and hassle-free.
      </p>
    </div>
  );
}
