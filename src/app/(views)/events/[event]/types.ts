export interface BuyTicketModalPropsType {
  isModalOpen: boolean;
  handleCancel: () => void;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleSelectTicket: () => void;
}
export interface BookingConfirmedModalPropsType {
  isModalOpen: boolean;
  handleCancel: () => void;
}
