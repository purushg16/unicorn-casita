const currencyFormatter = (value: number) => {
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return currencyFormatter.format(value);
};

export default currencyFormatter;
