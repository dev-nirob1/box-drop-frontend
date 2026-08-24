import { useState } from "react";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { itemTypes, paymentOptions } from "../../utils/data";
import SenderForm from "../../components/widget/SenderForm";
import RecieverForm from "../../components/widget/RecieverForm";
import ParcelDetailForm from "../../components/widget/ParcelDetailForm";
import PaymentType from "../../components/widget/PaymentType";

const AdminAddParcel = () => {
  const [itemType, setItemType] = useState("document");
  const [weight, setWeight] = useState("");
  const [paymentType, setPaymentType] = useState("cod");

  const selectedItem = itemTypes.find((item) => item.value === itemType);

  const isOther = itemType === "other";

  const otherCharge =
    isOther && weight ? (Number(weight) <= 20 ? 150 : Number(weight) * 8) : 0;

  const estimatedCost = isOther ? otherCharge : selectedItem?.baseRate || 0;

  return (
    <div>
      {/* Back */}
      <Link
        to="/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
      >
        <FiArrowLeft />
        Back to All Parcels
      </Link>

      {/*todo: make reusable Heading */}
      <div className="mb-6">
        <Heading as={3}>Add New Parcel</Heading>

        <Paragraph>
          Enter parcel and customer details to create a new shipment.
        </Paragraph>
      </div>

      <form className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* =================================
            COLUMN 1 — SENDER
        ================================= */}
        <div className="rounded-md border border-secondary/10 bg-white p-6">
          <Heading as={5} className="mb-5">
            Sender Information
          </Heading>

          <SenderForm />
        </div>

        {/* =================================
            COLUMN 2 — RECEIVER + PARCEL
        ================================= */}
        <div className="space-y-6">
          {/* Receiver Information */}
          <div className="rounded-md border border-secondary/10 bg-white p-6">
            <Heading as={5} className="mb-5">
              Receiver Information
            </Heading>

            <RecieverForm />
          </div>

          {/* Parcel Details */}
          <div className="rounded-md border border-secondary/10 bg-white p-6">
            <Heading as={5} className="mb-5">
              Parcel Details
            </Heading>

            <ParcelDetailForm
              itemType={itemType}
              setItemType={setItemType}
              weight={weight}
              setWeight={setWeight}
              isOther={isOther}
              itemTypes={itemTypes}
            />
          </div>
        </div>

        {/* =================================
            COLUMN 3 — PAYMENT + COST
        ================================= */}
        <div>
          <div className="rounded-md border border-secondary/10 bg-white p-6 lg:sticky lg:top-6">
            <Heading as={5} className="mb-5">
              Payment & Cost
            </Heading>

            <div className="space-y-5">
              {/* Payment Type */}
              <div>
                <Label htmlFor="paymentType">Payment Type</Label>

                <PaymentType
                  paymentType={paymentType}
                  setPaymentType={setPaymentType}
                  paymentOptions={paymentOptions}
                />
              </div>

              {/* COD Amount */}
              {paymentType === "cod" && (
                <div>
                  <Label htmlFor="codAmount">COD Amount</Label>

                  <Input
                    id="codAmount"
                    name="codAmount"
                    type="number"
                    min="0"
                    placeholder="Enter amount"
                  />
                </div>
              )}

              {/* Cost Breakdown */}
              <div className="space-y-3 border-t border-secondary/10 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary">Item Type</span>

                  <span className="font-medium text-primary">
                    {selectedItem?.label}
                  </span>
                </div>

                {isOther && weight && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary">Weight</span>

                    <span className="font-medium text-primary">
                      {weight} kg
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary">Delivery Charge</span>

                  <span className="font-medium text-primary">
                    ৳{estimatedCost}
                  </span>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between border-t border-secondary/10 pt-4">
                  <Label>Estimated Cost</Label>

                  <Heading as={4} className="mb-0 text-accent">
                    ৳{estimatedCost}
                  </Heading>
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" className="w-full">
                Create Parcel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminAddParcel;
