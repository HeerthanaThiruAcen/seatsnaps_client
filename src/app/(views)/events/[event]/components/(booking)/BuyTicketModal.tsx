import { Modal, Select } from "antd";
import React from "react";
import { BuyTicketModalPropsType } from "../../types";
import SelectTickets from "./SelectTickets";
import AttendeeDetails from "./AttendeeDetails";
import ReviewTickets from "./ReviewTickets";

export default function BuyTicketModal({
  isModalOpen,
  handleCancel,
  step,
  setStep,
  handleSelectTicket,
}: BuyTicketModalPropsType) {
  return (
    <Modal
      title={<p className="text-lg">Select Tickets</p>}
      open={isModalOpen}
      //   onOk={form.submit}
      onCancel={handleCancel}
      footer={false}
    >
      {step === 1 && (
        <SelectTickets
          handleSelectTicket={handleSelectTicket}
          setStep={setStep}
        />
      )}
      {step === 2 && <AttendeeDetails />}
      {step === 3 && <ReviewTickets />}
    </Modal>
  );
}
