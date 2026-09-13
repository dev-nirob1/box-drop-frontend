import Heading from "../ui/Heading";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Span from "../ui/Span";

const PaymentCost = () => {
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
            defaultValue=""
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
        <div>
          <Label htmlFor="codAmount">COD Amount (৳)</Label>

          <Input
            id="codAmount"
            name="codAmount"
            type="number"
            placeholder="Enter COD amount"
          />
        </div>

        {/* Cost Summary */}
        <div className="rounded-lg border border-secondary/10 bg-secondary/5 p-4">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <Span className="text-secondary">Delivery Charge</Span>

              <Span className="font-medium">৳150</Span>
            </div>

            <div className="flex items-center justify-between">
              <Span className="text-secondary">COD Amount</Span>

              <Span className="font-medium">৳1,500</Span>
            </div>

            <div className="flex items-center justify-between">
              <Span className="text-secondary">Payment Method</Span>

              <Span className="font-medium">Cash on Delivery</Span>
            </div>

            <div className="border-t border-secondary/10 pt-3">
              <div className="flex items-center justify-between">
                <Span className="font-semibold">Total Collection</Span>

                <Span className="text-lg font-bold text-accent">৳1,650</Span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCost;
