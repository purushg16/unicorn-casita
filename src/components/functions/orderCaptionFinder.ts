import { Order } from "../entities/order";

const orderCaptionFinder = (order: Order) => {
  if (order.orderStatus === "pending")
    return "This Order need to be confirmed yet";

  if (order.orderStatus === "cancelled") return "This Order has been cancelled";

  if (order.orderStatus === "confirmed" && order.shippingStatus === "unshipped")
    return "Order has been confirmed, not yet disptached";

  return "Order has been completed and disptached successfully";
};

export default orderCaptionFinder;
