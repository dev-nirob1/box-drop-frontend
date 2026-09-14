import Heading from "../ui/Heading";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Span from "../ui/Span";
import Button from "../ui/Button";

const PaymentCost = ({
  paymentMethod,
  setPaymentMethod,
  deliveryCharge,
  codAmount,
  setCodAmount,
  totalCollection,
  submitting,
}) => {
  return (
    <div className="border border-secondary/10 rounded p-4 h-fit">
      <div className="space-y-4">
        <Heading as={5}>Payment and Cost</Heading>

        {/* Payment Method */}
        <div>
          <Label htmlFor="paymentMethod">Payment Method</Label>

          <select
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => {
              const value = e.target.value;
              setPaymentMethod(value);
              if (value === "prepaid") {
                setCodAmount(0);
              }
            }}
            className="border border-secondary/10 bg-background py-3 px-3 focus:outline-none focus:ring-2 focus:ring-accent w-full rounded"
          >
            <option value="" disabled>
              Select Payment Method
            </option>

            <option value="cod">Cash on Delivery</option>

            <option value="prepaid">PrePaid</option>
          </select>
        </div>

        {/* COD Amount */}
        {paymentMethod === "cod" && (
          <div>
            <Label htmlFor="codAmount">COD Amount (৳)</Label>

            <Input
              id="codAmount"
              name="codAmount"
              type="number"
              value={codAmount}
              onChange={(e) => setCodAmount(e.target.value)}
              placeholder="Enter COD amount"
            />
          </div>
        )}

        {/* Cost Summary */}
        <div className="rounded-lg border border-secondary/10 p-4">
          <div className="space-y-3 text-sm text-primary">
            <div className="flex items-center justify-between">
              <Span className="text-sm ">Delivery Charge</Span>

              <Span className="text-sm font-medium">
                ৳{deliveryCharge || 0}
              </Span>
            </div>

            <div className="flex items-center justify-between">
              <Span className="text-sm">COD Amount</Span>

              <Span className="text-sm font-medium">৳{codAmount || 0}</Span>
            </div>

            <div className="flex items-center justify-between">
              <Span className="text-sm">Payment Method</Span>
              <Span className="text-sm font-medium">
                {paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : paymentMethod === "prepaid"
                    ? "Prepaid"
                    : "-"}
              </Span>
            </div>

            <div className="border-t border-secondary/10 pt-3">
              <div className="flex items-center justify-between">
                <Span className="font-semibold text-sm">Total Collection</Span>

                <Span className="text-lg font-bold text-accent">
                  ৳{totalCollection}
                </Span>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          variant="primary"
          className="w-full mt-4"
          disabled={submitting}
        >
          {submitting ? "Adding Parcel..." : "Add Parcel"}
        </Button>
      </div>
    </div>
  );
};

export default PaymentCost;
