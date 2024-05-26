import { Order } from "../entities/order";

const orderCaptionFinder = (order: Order) => {
  if (order.orderStatus === "pending")
    return "This Order need to be confirmed yet";
  if (order.orderStatus === "cancelled") return "This Order has been cancelled";
  if (order.orderStatus === "completed" && order.shippingStatus === "unshipped")
    return "Order has been completed, not yet disptached";
  if (order.orderStatus === "completed" && order.shippingStatus === "shipped")
    return "Order has been completed and disptached successfully";
  return "";
};

export default orderCaptionFinder;
