export interface RejectRefund {
  mongooseOrderId: string;
}

export interface InitiateRefund extends RejectRefund {
  refundOption: "full" | "partial";
  partialAmount?: number;
}
