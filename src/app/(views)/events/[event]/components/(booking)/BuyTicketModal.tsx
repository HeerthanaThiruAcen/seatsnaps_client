import { Modal, Select } from "antd";
import React from "react";
import { BuyTicketModalPropsType } from "../../types";
import SelectTickets from "./SelectTickets";
import AttendeeDetails from "./AttendeeDetails";
import ReviewTickets from "./ReviewTickets";

export default function BuyTicketModal({
  isModalOpen,
  handleCancel,
}: BuyTicketModalPropsType) {
  return (
    <Modal
      title={<p className="text-lg">Select Tickets</p>}
      open={isModalOpen}
      //   onOk={form.submit}
      onCancel={handleCancel}
      footer={false}
    >
      {/* <SelectTickets /> */}
      {/* <AttendeeDetails /> */}
      <ReviewTickets />
    </Modal>
  );
}
