import { VerifyOrder } from "../../entities/order";

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export default function raporpayVerifyOrder(
  amount: number,
  orderId: string
): Promise<VerifyOrder> {
  return new Promise((resolve) => {
    const response: VerifyOrder = {
      orderId: "",
      paymentId: "",
      // newOrderId: "",
      xRazorpaySignature: "",
    };

    const options = {
      key_id: import.meta.env.REACT_APP_RAZOR_PAY_KEY_ID,
      amount: amount.toString(),
      currency: "INR",
      theme: {
        color: "#3399cc",
      },
      order_id: orderId,
      handler: (res: RazorpayResponse) => {
        response.orderId = orderId;
        response.paymentId = res.razorpay_payment_id;
        // response.newOrderId = res.razorpay_order_id;
        response["xRazorpaySignature"] = res.razorpay_signature;
        resolve(response);
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instance = new (window as any).Razorpay(options);

    instance.on("payment.success", () => {
      instance.close();
    });
    // Open the Razorpay dialog
    instance.open();
    // Cleanup function to handle component unmounting
    return () => {
      instance.close();
    };
  });
}
