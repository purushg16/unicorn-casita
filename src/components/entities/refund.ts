export interface RejectRefund {
  mongooseOrderId: string;
}

export interface InitiateRefund extends RejectRefund {
  refundOption: "full" | "partial" | "no-refund";
  partialAmount?: number;
}
