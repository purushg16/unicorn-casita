export default function ColorSchemeDetector(status: string) {
  if (status === "refunded") return "teal";
  else if (
    status === "success" ||
    status === "completed" ||
    status === "shipped"
  )
    return "green";
  else if (status === "confirmed" || status === "created") return "blue";
  else if (status === "pending" || status === "partial-refund") return "yellow";
  else if (
    status === "failed" ||
    status === "cancelled" ||
    status === "unshipped"
  )
    return "red";

  return "gray";
}
