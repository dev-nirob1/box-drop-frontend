const PaymentType = ({paymentType, setPaymentType, paymentOptions}) => {
  return (
    <select
      id="paymentType"
      name="paymentType"
      value={paymentType}
      onChange={(e) => setPaymentType(e.target.value)}
      className="w-full rounded-md border border-secondary/30 px-4 py-3 text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
    >
      {paymentOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default PaymentType;
