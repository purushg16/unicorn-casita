export default function dateConverter(date: string | Date) {
  const timestamp = new Date(date);
  const istTime = timestamp.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata", // Set the timezone to IST
    dateStyle: "medium", // Format the date
    timeStyle: "medium", // Format the time
  });

  return istTime;
}
